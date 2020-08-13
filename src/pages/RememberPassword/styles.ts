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
    fontSize: 60,
    textAlign: "left",
  },

  titleDescription: {
    fontFamily: "Poppins_400Regular",
    color: "#D4C2FF",
    maxWidth: 150,
    fontSize: 16,
    textAlign: "left",
  },

  downContent: {
    flex: 0.6,
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

  lembrarMe: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  optionsLogin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
  },

  lembrarMeText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#9C98A6",
  },

  senhaText: {
    color: "#9C98A6",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },

  logoIcon: {
    width: 400,
    height: 60,
    resizeMode: "contain",
  },
});

export default styles