const backgroundColor = {
  bkColor1: "#111111",
  bkColor2: "#232323",
  bkColor3: "#2b2b2b",
  bkColor4: "#303030",
  bkColor5: "#494949",
  bkColor6: "#707070",
} as const;

const textIconColor = {
  white: "#fff",
  coolGray: "#B9B9B9",
  gray: "#8A8A8A",
  darkGray: "#787878",
} as const;

const pointColor = {
  main: "#2D8CEB",
  warning: "#FF5B5B",
  check: "#56EAB4;",
} as const;

const color = {
  backgroundColor,
  textIconColor,
  pointColor,
};
export default color;
