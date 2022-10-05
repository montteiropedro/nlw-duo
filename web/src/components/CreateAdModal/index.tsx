import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { GameController, MagnifyingGlassPlus } from "phosphor-react";
import {
  SDiv, SLabel, SInput, SFooter, SButton, SFormError,
  SDialogTrigger, SDialogClose, SDialogContent, SDialogOverlay, SDialogTitle,
} from "./styled";

import * as Dialog from "@radix-ui/react-dialog";
import { RadixToggleGroup } from "../Radix/RadixToggleGroup";
import { RadixCheckbox } from "../Radix/RadixCheckbox";
import { RadixSelect } from "../Radix/RadixSelect";

import { api } from "../../api";
import axios from "axios";

interface FormProps {
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string[],
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

export interface ModalGameProps {
  id: string;
  title: string;
}

// TODO: Clean the validation code.

const AdSchema = z.object({
  gameId: z
    .string({ required_error: "Por favor, selecione um jogo." })
    .uuid({ message: "Problema ao selecionar o jogo, favor nos informe sobre o ocorrido." }),
  name: z
    .string()
    .min(1, "Por favor, informe seu nome ou nickname."),
  yearsPlaying: z
    .number({ invalid_type_error: "Por favor, informe há quanto tempo joga." })
    .int()
    .min(0, "Aceitamos até 0. Justo, não?")
    .max(100, "100 anos no mesmo jogo é um limite bom, não?"),
  discord: z
    .string()
    .min(1, "Por favor, informe o seu Discord."),
  weekDays: z
    .string()
    .array()
    .min(1, "Por favor, selecione ao menos 1 dia.")
    .max(7, "Como conseguiu selecionar mais do que 7 dias?"),
  hourStart: z.string(),
  hourEnd: z.string(),
  useVoiceChannel: z.boolean()
}).strict();

export function CreateAdModal() {
  const [games, setGames] = useState<ModalGameProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { control, register, handleSubmit, formState: { errors } } = useForm<FormProps>({
    resolver: zodResolver(AdSchema)
  });

  async function onSubmit(data: FormProps) {
    try {
      await api.post(`/games/${data.gameId}/ads`, data, {
        withCredentials: true
      });

      setIsModalOpen(false);
      alert("O anúncio foi criado com sucesso!");
    }
    catch(error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        alert("Para criar um anúncio é necessário estar logado.");
      }
    }
  }

  useEffect(() => {
    try {
      api.get("/games")
        .then(res => setGames(res.data));
    }
    catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <SDialogTrigger>
        <MagnifyingGlassPlus size={24} />
        Publicar anúncio
      </SDialogTrigger>
      
      <Dialog.Portal>
        <SDialogOverlay />
        
        <SDialogContent>
          <SDialogTitle>Publique um anúncio</SDialogTitle>

          <form onSubmit={handleSubmit(onSubmit)}>
            <SDiv gap=".5rem" className="flex">
              <SLabel htmlFor="game" className="font-semibold">Qual o game?</SLabel>
              <Controller
                control={control}
                name="gameId"
                render={({ field: { ref, onChange }}) => (
                  <RadixSelect
                    games={games}
                    onChange={onChange}
                  />
                )}
              />
              
              <SFormError>{errors.gameId?.message }</SFormError>
            </SDiv>

            <SDiv gap=".5rem" className="flex">
              <SLabel htmlFor="name" className="font-semibold">Seu nome (ou nickname)</SLabel>
              <SInput id="name" {...register("name")} placeholder="Como te chamam dentro do game?" />
              
              <SFormError>{errors.name?.message}</SFormError>
            </SDiv>

            <SDiv gap="1.5rem" className="grid">
              <SDiv gap=".5rem" marginB="none" className="flex">
                <SLabel htmlFor="yearsPlaying" className="font-semibold">Joga há quantos anos?</SLabel>
                <SInput type="number" id="yearsPlaying" {...register("yearsPlaying", { valueAsNumber: true })} placeholder="Tudo bem ser ZERO" />
                
                <SFormError>{errors.yearsPlaying?.message}</SFormError>
              </SDiv>

              <SDiv gap=".5rem" marginB="none" className="flex">
                <SLabel htmlFor="discord" className="font-semibold">Qual o seu Discord?</SLabel>
                <SInput id="discord" {...register("discord")} placeholder="Usuário#0000" />
                
                <SFormError>{errors.discord?.message}</SFormError>
              </SDiv>
            </SDiv>

            <SDiv gap="1.5rem" marginB="1.5rem" className="grid">
              <SDiv gap=".5rem" marginB="none" className="flex">
                <SLabel htmlFor="weekDays" className="font-semibold">Quando costuma jogar?</SLabel>
                <Controller
                  control={control}
                  name="weekDays"
                  defaultValue={[]}
                  render={({ field: { ref, value, onChange } }) => (
                    <RadixToggleGroup
                      selected={value}
                      onChange={onChange}
                    />
                  )}
                />
                <SFormError>{errors.weekDays?.message}</SFormError>
              </SDiv>

              <SDiv gap=".5rem" marginB="none" className="flex">
                <SLabel htmlFor="hourStart" className="font-semibold">Qual horário do dia?</SLabel>
                <SDiv gap=".5rem" className="grid">
                  <SInput
                    id="hourStart"
                    {...register("hourStart")}
                    required
                    defaultValue="12:00"
                    type="time"
                    placeholder="De"
                  />
                  <SInput
                    id="hourEnd"
                    {...register("hourEnd")}
                    required
                    defaultValue="12:00"
                    type="time"
                    placeholder="Até"
                  />
                </SDiv>
              </SDiv>
            </SDiv>

            <SLabel gap=".5rem" direction="row" className="discord-label">
              <Controller
                control={control}
                name="useVoiceChannel"
                defaultValue={false}
                render={({ field: { ref, value, onChange } }) => (
                  <RadixCheckbox
                    checked={value}
                    onChange={onChange}
                  />
                )}
              />
              Costumo me conectar ao chat de voz
            </SLabel>

            <SFooter>
              <SDialogClose>Cancelar</SDialogClose>
              <SButton type="submit">
                <GameController size={24} />
                Encontrar duo
              </SButton>
            </SFooter>
          </form>
        </SDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
