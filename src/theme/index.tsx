const colors = {
  dark: "#252525",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_dark: "#292729",
  primary: "#E33F3F",
  green: "green",
  success: "#24BA45",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
  loginLine: "#f56a2c",
};

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
};

const button = {
  sizes: {
    width: {
      SM: "95px",
      MD: "225px",
      LG: "275px",
      XL: "400px",
    },
    height: {
      SM: "34px",
      MD: "38px",
      LG: "53px",
    },
  },
  paddings: {
    XS: "6px",
    SM: "12px",
    MD: "0px 24px",
    LG: "18px 24px",
  },
};

const font = {
  sizes: {
    XXXS: "8px",
    XXS: "10px",
    XS: "12px",
    SM: "15px",
    P0: "16px",
    P1: "18px",
    P2: "20px",
    P3: "24px",
    P4: "36px",
    P5: "48px",
    P6: "60px",
    HUGE: "128px",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heavy: 800,
  },
  families: {
    stylish: `"Atma", cursive`,
    classic: `"Open Sans", sans-serif`,
  },
};
const gridUnit = 8;
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
};
const shadows = {
  tiny: "-4px 8px 8px 0px rgb(0 0 0 / 10%)",
  subtle: "0px -6px 8px -2px rgba(0, 0, 0, 0.1)",
  light: "0px 0px 20px 0px rgba(0, 0, 0, 0.2) inset ",
  medium: "-8px 8px 20px 0px rgb(0 0 0 / 20%)",
  consequent: "8px 0px 20px 8px rgba(0, 0, 0, 0.2) inset",
  strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
};

const sizes = {
  medium: "1440px",
  small: "1024px",
  mobile: "550px",
};

const devices = {
  medium: `(max-width: ${sizes.medium})`,
  small: `(max-width: ${sizes.small})`,
  mobile: `(max-width: ${sizes.mobile})`,
};

const animations = {
  speed: {
    fast: "0.2s",
    medium: "0.3s",
    slow: "0.5s",
  },
};

export const theme = {
  colors,
  font,
  gridUnit,
  borderRadius,
  shadows,
  spacing,
  button,
  sizes,
  devices,
  animations,
};
