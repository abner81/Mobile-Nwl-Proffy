import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7",
    justifyContent: "center",
  },

  containerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 26,
    paddingHorizontal: 8,
  },

  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  profileTextImg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileName: {
    paddingLeft: 16,
    color: '#D4C2FF',
    fontFamily: 'Poppins_500Medium',
    fontSize: 13,
    maxWidth: 220,
    overflow: 'hidden',
    lineHeight: 22,
  },

  bottomProfileContainer: {
    backgroundColor: '#774DD6',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
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
    marginTop: 50,
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
    marginTop: 42,
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