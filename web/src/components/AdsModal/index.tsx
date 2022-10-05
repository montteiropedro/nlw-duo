import * as Dialog from "@radix-ui/react-dialog";

import { SmileySad } from "phosphor-react";
import {
  SDialogContent, SDialogOverlay, SDialogTitle, SDialogClose,
  SHeader, SSubtitle, SBanner, SNoAdsMessage, SFooter
} from "./styled";

import { Slider } from "./Slider";
import { Card } from "./Card";

import { AdProps } from "../GameBanner";

interface AdsModalProps {
  title: string,
  bannerUrl: string;
  ads: AdProps[];
}

export function AdsModal({ title, bannerUrl, ads }: AdsModalProps) {
  return (
    <Dialog.Portal>
      <SDialogOverlay />

      <SDialogContent>
        <SHeader>
          <SBanner src={bannerUrl} />
          <div>
            <SDialogTitle title={title}>{title}</SDialogTitle>
            <SSubtitle>Conecte-se e comece a jogar.</SSubtitle>
          </div>
        </SHeader>
          
        {ads.length ? (
          <Slider>
            {ads.map(ad => (
              <Card
                key={ad.id}
                id={ad.id}
                name={ad.name}
                yearsPlaying={ad.yearsPlaying}
                weekDays={ad.weekDays}
                hourStart={ad.hourStart}
                hourEnd={ad.hourEnd}
                useVoiceChannel={ad.useVoiceChannel}
              />
            ))}
          </Slider>
        ) : (
          <SNoAdsMessage>
            <SmileySad size={64} weight="bold" />
            <span>Opa! parece que estamos sem anúncios.</span>
          </SNoAdsMessage>
        )}

        <SFooter>
          <SDialogClose>
            Fechar
          </SDialogClose>
        </SFooter>
      </SDialogContent>
    </Dialog.Portal>
  );
}
