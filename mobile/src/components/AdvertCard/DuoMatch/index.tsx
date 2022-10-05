import { useState } from "react";
import {
  Modal,
  ModalProps,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import * as Clipboard from "expo-clipboard";

import { THEME } from "../../../theme";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";

import { Heading } from "../../Heading";
import { Loading } from "../../Loading";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
};

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState<boolean>(false);
  
  async function handleCopyDiscordToClipboard() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);
    
    ToastAndroid.show("Discord Copiado", ToastAndroid.SHORT)
    setIsCopping(false);
  }
  
  return (
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent
      {...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          
          <CheckCircle
            size={64}
            weight="bold"
            color={THEME.COLORS.SUCCESS}
          />
          
          <Heading 
            title="Let's Play"
            subtitle="Agora é só começar a jogar!"
            style={{ marginTop: 24, alignItems: "center" }}
          />

          <Text style={styles.label}>
            Adicione no Discord
          </Text>

          <TouchableOpacity
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopping}
            style={styles.discordButton}
          >
            <Text style={styles.discord}>
              {isCopping ? <Loading /> : discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
