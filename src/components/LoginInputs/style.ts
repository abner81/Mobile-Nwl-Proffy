import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputsGroup: {
    paddingTop: 24,
  },

  input: {
    width: 331,
    height: 64,
    backgroundColor: "#FAFAFC",
    borderWidth: 1,
    borderColor: "#E6E6F0",
    paddingLeft: 24,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#6A6180",
  },

  email: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  password: {
    flex: 1,
    height: 64,
    color: "#6A6180",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },

  iconPassword: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAFAFC",
    borderWidth: 1,
    borderColor: "#E6E6F0",
    paddingLeft: 24,
    height: 64,
    fontSize: 14,
    lineHeight: 24,
    color: "#9C98A6",
    width: 331,
    fontFamily: "Poppins_400Regular",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  iconRight: {
    marginRight: 10,
    color: "#9C98A6",
  },

  button: {
    width: 331,
    height: 56,
    backgroundColor: "#DCDCE5",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    lineHeight: 26,
    color: "#9C98A6",
  },

  textButton: {
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
    lineHeight: 26,
    color: "#9C98A6",
  },

  focused: {
    borderLeftWidth: 5,
    borderColor: "#8257E5",
  },

  emailFocused: {
    borderLeftWidth: 5,
    borderColor: "#8257E5",
  },

  Iconfocused: {
    color: "#8257E5",
  },

  
});

export default styles;
