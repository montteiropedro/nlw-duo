import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog"

import { SDialogTrigger, SImg, SGradient, STitle, SText } from "./styled";

import { AdsModal } from "../AdsModal";

import { api } from "../../api";

interface GameCardProps {
  gameId: string;
  title: string;
  adsCount: number;
  bannerUrl: string;
}

export interface AdProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string;
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
}

export function GameBanner({ gameId, title, adsCount, bannerUrl }: GameCardProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [ads, setAds] = useState<AdProps[]>([]);

  async function handleFetchAds() {
    await api.get(`/games/${gameId}/adverts`)
    .then(res => setAds(res.data))
    .catch(error => console.log(error));

    setLoading(false);
  }

  // TODO: atualizar o card da tela inicial quando um novo anúncio for criado.

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <SDialogTrigger onClick={handleFetchAds} className="keen-slider__slide">
        <SImg src={bannerUrl} alt="Game Card" title={title} />

        <SGradient>
          <STitle title={title}>{title}</STitle>

          {adsCount === 1 ? (
            <SText title={`${adsCount} anúncio`}>
              {adsCount} anúncio
            </SText>
          ) : (
            <SText title={`${adsCount} anúncios`}>
              {adsCount} anúncios
            </SText>
          )}
        </SGradient>
      </SDialogTrigger>

      <AdsModal
        title={title}
        bannerUrl={bannerUrl}
        ads={ads}
        loading={loading}
      />
    </Dialog.Root>
  );
}
