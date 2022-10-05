import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    padding: 20,
    width: 225,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8
  },
  button: {
    paddingHorizontal: 26,
    paddingVertical: 9,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    marginLeft: 8,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM
  }
});
