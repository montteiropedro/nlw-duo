import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.OVERLAY
  },
  content: {
    position: "relative",
    paddingHorizontal: 40,
    paddingVertical: 32,
    width: 320, 
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: THEME.COLORS.SHAPE
  },
  closeIcon: {
    position: "absolute",
    top: 16,
    right: 16
  },
  label: {
    marginTop: 24,
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  },
  discordButton: {
    marginTop: 8,
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.BACKGROUND_800
  },
  discord: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
});
