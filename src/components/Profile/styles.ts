import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  greetings: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 24,
    marginRight: 7,
  },
  user: {
    flexDirection: "row",
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
});