
const commanColors = {
  ///Driver Color
  Defaultwhite: "#FFFFFF", //White
  Defaultblack: "#000000", //White
  ButtonColor: "#3F444D",
  TextColor: "#5F6C85",
  BlackColor: "#333333",
  bgColors: "#23272f",
  BlueColor: "#1183FD",
  lightGray: "#94A0B8",
  successColor: "#27A841",
  bgBlue: "#3D7BF7",
  borderColor: "#94A0B8",
  newborderColor: "#E1E6EF",
  editTextUnderlineColor: "rgba(143, 155, 179, 0.50)",
  editTextHintColor: "#8F9BB3",
  editTextUnSelectedColor: "#0497F2",
  blueWithOpacity: "#F6F6F6",
  borderbootmcolors: "#F1F3F9",
  Whitetransparent84: "rgba(255, 255, 255, 0.84)",
  Whitetransparent12: "rgba(255, 255, 255, 0.12)",
  Whitetransparent70: "rgba(255, 255, 255, 0.70)",
  Blacktransparent20: "rgba(0, 0, 0, 0.20)",
  Blacktransparent8: "rgba(0, 0, 0, 0.08)",
  Blacktransparent16: "rgba(0, 0, 0, 0.16)",
  Blacktransparent50: "rgba(0, 0, 0, 0.50)",
  textinputbgcolor: "#F8F9FC",
  uploadtextColor: "#FF0038",
  SapreateBorder: "#f4f5f7",

  //Black Color
  BlackColor900: "#212121", //palette.text.primary
  BlackColor800: "#424242", //Icon color
  BlackColor700: "#616161",
  BlackColor600: "#757575", //palette.text.secondary // palette.action.active
  BlackColor500: "#9E9E9E", //palette.text.disabled
  BlackColor400: "#BDBDBD", //palette.action.disabled
  BlackColor300: "#E0E0E0", //palette.divider // palette.action.disabledBG
  BlackColor200: "#EEEEEE", //palette.divider- light // palette.action.selected
  BlackColor100: "#F5F5F5", //palette.divider- Big // palette.action.hover
  BlackColor50: "#FAFAFA", //palette.background.default

  //Light Blue Color Default Blue
  LightBlueColor900: "#1C4C9D",
  LightBlueColor800: "#DCE7FE",
  LightBlueColor700: "#327ACE",
  LightBlueColor600: "#3A8CE1",
  LightBlueColor500: "#409AEF",
  LightBlueColor400: "#56A8F1",
  LightBlueColor300: "#72B7F3",
  LightBlueColor200: "#98CBF7",
  LightBlueColor100: "#BFDFF9",
  LightBlueColor50: "#E5F2FD",

  //Orange Color
  OrangeColor900: "#E75102",
  OrangeColor800: "#EF6C02",
  OrangeColor700: "#F57C02",
  OrangeColor600: "#FB8C01",
  OrangeColor500: "#FF9800",
  OrangeColor400: "#FFA726",
  OrangeColor300: "#FFB84C",
  OrangeColor200: "#FFCD80",
  OrangeColor100: "#FFE0B2",
  OrangeColor50: "#FFF3E0",

  //Yellow Color
  YellowColor900: "#F57F17",
  YellowColor800: "#F9C33E",
  YellowColor700: "#FBC02D",
  YellowColor600: "#FDD835",
  YellowColor500: "#FFEB3B",
  YellowColor400: "#FFEE58",
  YellowColor300: "#FFF176",
  YellowColor200: "#FFF59D",
  YellowColor100: "#FFF9C4",
  YellowColor50: "#FFFDE7",

  //Green Color
  GreenColor900: "#1C5E21",
  GreenColor800: "#2D7D33",
  GreenColor700: "#398D3C",
  GreenColor600: "#43A046",
  GreenColor500: "#4BAF50",
  GreenColor400: "#65BC69",
  GreenColor300: "#81C784",
  GreenColor200: "#A4D7A7",
  GreenColor100: "#C9E6C9",
  GreenColor50: "#E8F6E9",

  //Red Color
  RedColor900: "#AD1E24",
  RedColor800: "#BC2A2F",
  RedColor700: "#C83136",
  RedColor600: "#D93B3C",
  RedColor500: "#E8453E",
  RedColor400: "#E45455",
  RedColor300: "#DB7475",
  RedColor200: "#E79A9B",
  RedColor100: "#FACDD2",
  RedColor50: "#FDEBEE",

  //Secondary Color
  SecondaryColor600: "#3D7BF7",
  SecondaryColor700: "#3DB24B",
  SecondaryColor500: "#0A90FF",
  SecondaryColor300: "#5BB2FF",

  //Primary Color
  PrimaryColor700: "#286EEF",
  PrimaryColor500: "#286EEF",
  PrimaryColor300: "#7AC981",
  PrimaryColor500With10: "#286EEF25",
  PrimaryColor800: "#FFFFFF",
  SecondaryColor500With10: "##3DB24B25",

  Transparent75: "rgba(34, 43, 69, 0.75)",
  DarkGreyColor: "#3D5775", //Dark grey Used in navigation Header , TextInput Color

  // pendingStatusbgColor:'rgba(255, 245, 205, 0.50)',
  // pendingStatusColor:'#DB8B03',
  // CancelStatusBgColor:'rgba(255, 219, 213, 0.50)',
  // CancelStatusColor:'#DB235F',
  zonesLayerColor: "#4BAF50",
  surgeLayerColor: "#E8453E",
  subscriptiontext: "#58759F",
  subscriptionbold: "#1C2E52",
  borderlight: `rgba(183, 197, 226, ${0.5})`,
};

export interface ColorInterface {
  [name: string]: any;
}


// Config.APP_NAME = "SKTaxi"
// Config.COMPANY_ID = "456"
const Colors = commanColors
export default Colors;
