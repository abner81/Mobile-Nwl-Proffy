import { StyleSheet } from 'react-native'
import { Archivo_500Medium } from '@expo-google-fonts/archivo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F7',
  },

  headerStyle: {
    flex: 0.4,
    backgroundColor: '#8257E5',
    paddingHorizontal: 64,
    paddingTop: 69,
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgBook: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
  },

  footerStyle: {
    flex: 0.6,
    paddingHorizontal: 40,
  },

  footerText: {
    marginTop: 96,
  },

  textNumber: {
    fontFamily: 'Archivo_500Medium',
    color: '#6A6180',
    fontSize: 40,
    lineHeight: 44,
    opacity: 0.16,
  },

  textInfo: {
    paddingTop: 24,
    maxWidth: 250,
    fontFamily: 'Poppins_500Medium',
    color: '#6A6180',
    fontSize: 24,
    lineHeight: 34,
  },

  footerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 96,
  },

  NextIcon: {
    transform: [{ rotate: "-180deg" }]
  }
})

export default styles