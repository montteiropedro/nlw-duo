import { useState } from "react";

import { GameController, CheckCircle } from "phosphor-react";
import { SButton, SCard, SCardInfo, SCloseButton, SDiscordButton, SDiscordInfo, SLabel, SText } from "./styled";
import { THEME } from "../../../utils/theme";

import { AdProps } from "../../GameBanner";

import { ToastMessage } from "../../ToastMessage";

import { api } from "../../../api";
import axios from "axios";

export function Card({
  id: adId,
  name,
  yearsPlaying,
  weekDays,
  hourStart,
  hourEnd,
  useVoiceChannel
}: AdProps) {
  const [discord, setDiscord] = useState<string>("");
  const [showToastMessage, setShowToastMessage] = useState<boolean>(false);

  async function handleFetchDiscordUser() {
    try {
      await api.get(`/ads/${adId}/discord`)
      .then(res => setDiscord(res.data.discord))
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      }
    } 
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(discord);
    setShowToastMessage(true);
    setTimeout(() => setShowToastMessage(false), 3000);
  }

  return (
    <SCard className="keen-slider__slide">
      <SCardInfo className="front-info">
        <SLabel className="front-info">Nome</SLabel>
        <SText className="front-info">{name}</SText>
      </SCardInfo>
      
      <SCardInfo className="front-info">
        <SLabel className="front-info">Tempo de Jogo</SLabel>
        <SText className="front-info">{yearsPlaying} {yearsPlaying === 1 ? "Ano" : "Anos"}</SText>
      </SCardInfo>
      
      <SCardInfo className="front-info">
        <SLabel className="front-info">Disponibilidade</SLabel>
        <SText className="front-info">
          {weekDays.length} {weekDays.length === 1 ? "Dia" : "Dias"}
          <span className="bullet">{` \u2022 `}</span>
          {hourStart} - {hourEnd}
        </SText>
      </SCardInfo>
      
      <SCardInfo className="front-info">
        <SLabel className="front-info">Chamada de áudio?</SLabel>
        {useVoiceChannel ? (
          <SText color={THEME.COLORS.EMERALD_400} className="front-info">Sim</SText>
        ) : (
          <SText color={THEME.COLORS.RED_400} className="front-info">Não</SText>
        )}
      </SCardInfo>

      <SDiscordInfo $display={!!discord}>
        <SCloseButton onClick={() => setDiscord("")} size={18} color={THEME.COLORS.ZINC_500} />

        <CheckCircle size={64} weight="bold" color={THEME.COLORS.EMERALD_400} />
          
        <SCardInfo className="back-info">
          <SLabel className="back-info">Let's play!</SLabel>
          <SText className="back-info">Agora é só começar a jogar!</SText>
        </SCardInfo>

        <SCardInfo className="back-info">
          <SLabel size={THEME.FONT_SIZE.MD} weight={THEME.FONT_WEIGHT.SEMI_BOLD} className="back-info">
            Adicione no Discord
          </SLabel>

          <SDiscordButton onClick={handleCopyToClipboard} title={discord}>
            <span className="button-text">{discord}</span>
            <ToastMessage
              display={showToastMessage}
              message="Copiado!"
            />
          </SDiscordButton>
        </SCardInfo>
      </SDiscordInfo>

      <SButton onClick={handleFetchDiscordUser}>
        <GameController size={24} />
        Conectar
      </SButton>
    </SCard>
  );
}
