declare global {
  interface Window {}
}
export type ValueOf<T extends Object> = T[keyof T];
