import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContent: {
    backgroundColor: "#8257E5",
    flex: 0.5,
    justifyContent: "center",
    paddingHorizontal: 56,
  },

  imgBackground: {
    width: 266,
    height: 238,
    justifyContent: "center",
    alignContent: "center",
  },

  titleView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },

  titleLogo: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 55,
    justifyContent: "center",
    alignItems: "center",
  },

  titleDescription: {
    fontFamily: "Poppins_400Regular",
    color: "#D4C2FF",
    maxWidth: 150,
    fontSize: 16,
  },

  downContent: {
    flex: 0.5,
    backgroundColor: "#F0F0F7",
    paddingHorizontal: 32,
  },

  titleLoginContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 56,
  },

  titleLogin: {
    fontFamily: "Poppins_600SemiBold",
    color: "#32264D",
    lineHeight: 34,
    fontSize: 24,
  },

  loginDescription: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    lineHeight: 24,
    color: "#8257E5",
  },

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
    color: "#9C98A6",
  },

  email: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  password: {
    flex: 1,
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
});

export default styles