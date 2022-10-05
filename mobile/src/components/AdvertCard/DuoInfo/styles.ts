import { StyleSheet } from "react-native";

import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16
  },
  label: {
    marginBottom: 4,
    color: THEME.COLORS.DUO_CARD_LABEL,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM
  },
  value: {
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM
  }
});
