import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 38,
    paddingTop: 68,
    backgroundColor: "#8257E5",
  },

  imgBackground: {
    width: "100%",
    height: "88%",
  },

  centerContent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  iconBorder: {
    width: 70,
    height: 70,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 23,
    borderColor: "#04D361",
  },

  textTitle: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    paddingTop: 24,
    paddingBottom: 16,
    textAlign: 'center',
    color: '#ffffff',
  },

  textDescription: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: '#D4C2FF',
  },

  button: {
    alignItems: 'center'
  }
});

export default styles;
