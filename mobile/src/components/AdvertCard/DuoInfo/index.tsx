import { ColorValue, Text, View } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../../theme";

interface ValueProps {
  days: string;
  StartEndHours: string;
  bulletChar: string;
}

interface Props {
  label: string;
  value: string | ValueProps;
  colorValue?: ColorValue;
  specialChar?: string;
}

export function DuoInfo({ label, value, colorValue = THEME.COLORS.TEXT}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      
      {typeof value === "string" ? (
        <Text style={[styles.value, { color: colorValue }]}>
          {value}
        </Text>
      ) : (
        <Text style={[styles.value, { color: colorValue }]}>
          {value.days}
          <Text style={{color: THEME.COLORS.CAPTION_500}}>
            {value.bulletChar}
          </Text>
          {value.StartEndHours}
        </Text>
      )}      
    </View>
  );
}
