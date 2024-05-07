import { atom } from "recoil";

// Language
export const langSelected = atom({
  key: "langSelected",
  default: "en",
});

//Theme
export const themeState = atom({
  key: "themeState",
  default: "dark",
});

export const industrySelected = atom({
  key: "industrySelected",
  default: "",
});
