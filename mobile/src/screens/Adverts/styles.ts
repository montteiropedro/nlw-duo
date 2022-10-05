import { StyleSheet, Dimensions } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    marginTop: 28,
    paddingHorizontal: 32,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    width: 70,
    height: 40
  },
  right: {
    width: 20,
    height: 20
  },
  cover: {
    marginHorizontal: 32,
    marginTop: 32,
    marginBottom: 24,
    width: Dimensions.get("window").width - 64,
    height: 180,
    borderRadius: 8
  },
  containerList: {
    width: "100%",
  },
  contentList: {
    paddingHorizontal: 32,
    marginTop: 16,
    alignSelf: "flex-start",
  },
  containerEmptyList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyListText: {
    marginTop: 16,
    color: THEME.COLORS.CAPTION_400,
  }
});
