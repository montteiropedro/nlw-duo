import { Text, TouchableOpacity, View, ViewProps } from "react-native";
import { GameController } from "phosphor-react-native";

import { THEME } from "../../theme";
import { styles } from "./styles";

import { DuoInfo } from "./DuoInfo";

export interface AdvertCardProps {
  id: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

interface Props {
  data: AdvertCardProps;
  onConnect: () => void;
}

export function AdvertCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
      label="Nome"
      value={data.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={data.yearsPlaying === 1 ? `${data.yearsPlaying} Ano` : `${data.yearsPlaying} Anos`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={{
          days: `${data.weekDays.length} Dias`,
          StartEndHours: `${data.hourStart} - ${data.hourEnd}`,
          bulletChar: " \u2022 "
        }}
      />

      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
        onPress={onConnect}
        style={styles.button}
      >
        <GameController size={20} color={THEME.COLORS.TEXT} />
        <Text style={styles.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
