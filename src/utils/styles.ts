import { StyleSheet } from "react-native";
import color from './color';

export default StyleSheet.create({
  textHeader: {
    color: color.textPrimary,
    fontSize: 18,
    fontFamily: 'Lato-Bold'
  },
  headerName: {
    color: color.textPrimary,
    fontSize: 24,
    padding: 8,
    fontFamily: 'Lato-Bold'
  },
  detailedText: {
    color: color.textPrimary,
    fontSize: 16,
    fontFamily: 'Lato-Regular'
  },
  textBtn: {
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: color.white,
    padding: 8
  },
  actionBtn: {
    backgroundColor: color.secondarygreen,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.cardBorder,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 12,
  }
});

export const markdonwStyles = StyleSheet.create({
  heading3: {
    fontSize: 28,
    color: color.textPrimary,
    fontFamily: 'Lato-Bold'
  },
  strong: {
    color: color.textPrimary,
    fontSize: 16,
    fontFamily: 'Lato-Bold' 
  },
  paragraph: {
    color: color.textPrimary,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    textAlign: 'justify'
  },
  list_item: {
    color: color.textPrimary,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    textAlign: 'justify'
  },
});