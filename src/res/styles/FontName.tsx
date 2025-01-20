import {Platform} from 'react-native';

export const FontName = {
  heavy: Platform.OS == 'ios' ? 'CerebriSans-Heavy' : 'CerebriSans-Heavy',
  extraBold:
    Platform.OS == 'ios' ? 'CerebriSans-ExtraBold' : 'CerebriSans-ExtraBold',
  bold: Platform.OS == 'ios' ? 'CerebriSans-Bold' : 'CerebriSans-Bold',
  semiBold:
    Platform.OS == 'ios' ? 'CerebriSans-SemiBold' : 'CerebriSans-SemiBold',
  medium: Platform.OS == 'ios' ? 'CerebriSans-Medium' : 'CerebriSans-Medium',
  regular:
    Platform.OS == 'ios' ? 'CerebriSans-Regular' : 'cerebri_sans_regular',
  book: Platform.OS == 'ios' ? 'CerebriSans-Book' : 'CerebriSans-Book',
  light: Platform.OS == 'ios' ? 'CerebriSans-Light' : 'CerebriSans-Light',

  heavy_italic:
    Platform.OS == 'ios'
      ? 'CerebriSans-HeavyItalic'
      : 'cerebri_sans_heavy_italic',
  extraBold_italic:
    Platform.OS == 'ios'
      ? 'CerebriSans-ExtraBoldItalic'
      : 'cerebri_sans_extrabold_Italic',
  bold_italic:
    Platform.OS == 'ios'
      ? 'CerebriSans-BoldItalic'
      : 'cerebri_sans_bold_italic',
  semiBold_italic:
    Platform.OS == 'ios'
      ? 'CerebriSans-SemiBoldItalic'
      : 'cerebri_sans_semibold_italic',
  medium_italic:
    Platform.OS == 'ios'
      ? 'CerebriSans-MediumItalic'
      : 'cerebri_sans_medium_italic',
  regular_italic:
    Platform.OS == 'ios'
      ? 'CerebriSans-RegularItalic'
      : 'cerebri_sans_regular_italic',
  book_italic:
    Platform.OS == 'ios'
      ? 'CerebriSans-BookItalic'
      : 'cerebri_sans_book_italic',
  light_italic:
    Platform.OS == 'ios'
      ? 'CerebriSans-LightItalic'
      : 'cerebri_sans_light_italic',
};
