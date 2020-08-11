import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7",
    justifyContent: "center",
  },

  topContent: {
    flex: 0.5,
    backgroundColor: "#8257e5",
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
    marginTop: 100,
  },

  title: {
    fontFamily: "Poppins_400Regular",
    fontSize: 20,
    lineHeight: 30,
    color: "#6A6180",
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  downContent: {
    flex: 0.5,
    paddingTop: 42,
    paddingHorizontal: 32,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },

  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },

  buttonPrimary: {
    backgroundColor: "#9871f5",
  },

  buttonSecondary: {
    backgroundColor: "#04d361",
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    fontSize: 20,
    color: "#fff",
  },

  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: '#9C98A6',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    paddingTop: 40,
  },
});

export default styles