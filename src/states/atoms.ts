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

//For Thor interactive page
export const industrySelected = atom({
  key: "industrySelected",
  default: "THOR for Manufacturing",
});
