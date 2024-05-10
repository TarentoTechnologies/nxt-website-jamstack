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

export const exampleQuestions = atom({
  key: "exampleQuestions",
  default: [
    "Car models with rate less than 99999",
    "Get me the models within the price range of 16000 and 20000",
    "Get me the details of BMW",
  ],
});

export const questionSelected = atom({
  key: "questionSelected",
  default: "",
});
