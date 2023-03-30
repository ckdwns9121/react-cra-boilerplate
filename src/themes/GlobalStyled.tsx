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
    background-color: var(--white);
    width: 100%;
    height: 100%;
  }
  :root {
    --white: "#fff";
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

  @supports (font-variation-settings: normal) {
    html {
      font-family: "Inter var", sans-serif;
    }
  }
`;

export default function GlobalStyle() {
  return <Global styles={reset} />;
}
