import type { GlobalTheme } from "../themes/theme";

declare module "@emotion/react" {
  // eslint-disable-next-line
  export interface Theme extends GlobalTheme {}
}
