import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeView: {
    width: "100%",
    height: "100%",
    padding: 16,
    paddingTop: 128,
    backgroundColor: "#312045",
    gap: 16,
  },
  flatList: {
    flexGrow: 0,
    width: "90%",
    alignSelf: "center",
    height: "50%",
  },
  titulo: {
    color: "white",
    fontSize: 48,
    marginBottom: 28,
  }
});

export default styles;
