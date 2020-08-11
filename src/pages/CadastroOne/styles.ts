import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: "#F0F0F7",
  },

  header: {
    flexDirection: "row",
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },

  backIcon: {
    color: "#9C98A6",
    width: 40,
    height: 40,
  },

  bolls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 10,
  },

  bollDark: {
    width: 40,
    height: 40,
    color: "red",
  },

  mainText: {
    flex: 0.4,
    justifyContent: "center",
    marginTop: 24,
  },

  mainTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 32,
    lineHeight: 42,
    color: "#32264D",
  },

  mainDescription: {
    paddingTop: 16,
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#6A6180",
  },

  mainLogin: {
    flex: 0.6,
    justifyContent: 'center',
  },

  loginTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
    lineHeight: 26,
    color: "#32264D",
  },

  inputGroup: {
    paddingVertical: 24,
  },

  buttonDown: {
    marginTop: 50
  }
});

export default styles