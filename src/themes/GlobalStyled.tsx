import { css, Global } from "@emotion/react";

const reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap");
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
    border: none;
    border-radius: 0;
  }
  ::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(173, 173, 173, 0.8);
    border-radius: 5px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  html,
  body {
    font-family: "Noto Sans KR", sans-serif;
    padding: 0;
    margin: 0;
    background-color: var(--bkColor2);
    width: 100%;
    height: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* overflow: hidden; */
  }
  :root {
    --bkColor1: #111111;
    --bkColor2: #232323;
    --bkColor3: #2b2b2b;
    --bkColor4: #303030;
    --bkColor5: #494949;
    --mainColor: #2d8ceb;
    --warning: #ff5b5b;
    --custom: #56eab4;
    --txtColor1: #ffffff;
    --txtColor2: #b9b9b9;
    --txtColor3: #8a8a8a;
    --txtColor4: #787878;
    --txtColor5: #494949;
    --timelineHeight: 48px;
    --bottomLineHeight: 30px;
    --bottomNavHeight: 72px;
    --mainHeight: 380px;
  }
  a {
    text-decoration: none;
  }
  html body .MuiTabs-indicator {
    background-color: #b9b9b9;
    height: 1.5px;
  }
  .MuiCircularProgress-root {
    color: #fff !important;
    svg {
      color: #fff !important;
    }
  }
  .MuiSnackbar-root {
    bottom: 70px !important;
    height: 10px;
    &.default {
      .MuiPaper-elevation {
        background-color: #111 !important;
      }
    }
    &.success {
      .MuiPaper-elevation {
        background-color: #2d8ceb !important;
      }
    }
    &.error {
      .MuiPaper-elevation {
        background-color: #ff5b5b !important;
      }
    }
    &.warning {
      .MuiPaper-elevation {
        background-color: #ff925d !important;
      }
    }
  }
  .MuiPaper-elevation {
    /* background-color: rgba(255, 91, 91, 0.9) !important; */
    /* background-color: #111 !important; */
    height: 35px !important ;
    min-width: 466px !important;
    .MuiSnackbarContent-message {
      color: #fff;
      font-size: 14px;
      padding: 0;
    }
  }
  text {
    display: none;
  }
  @supports (font-variation-settings: normal) {
    html {
      font-family: "Inter var", sans-serif;
    }
  }
`;

export default function GlobalStyle() {
  return <Global styles={reset} />;
}
