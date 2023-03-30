import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import type { PropsWithChildren } from "react";
import color from "./color";

import GlobalStyled from "./GlobalStyled";
import { GlobalTheme } from "./theme";

export default function GlobalThemeProvider({ children }: PropsWithChildren) {
  const theme: GlobalTheme = {
    color,
  };
  const theme2 = createTheme({
    palette: {
      primary: {
        main: "#6772e5",
      },
    },
  });
  return (
    <MuiThemeProvider theme={theme2}>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyled />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
