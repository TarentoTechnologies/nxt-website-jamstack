import React from "react";
import { useRecoilState } from "recoil";

import { themeState } from "../../../states/atoms";
import { chatSectionDark, chatSectionLight } from "./ChatSection.module.css";

export const ChatSection = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <div
      className={`${
        theme === "dark" ? chatSectionDark : chatSectionLight
      } w-50`}
    >
      <div></div>
    </div>
  );
};
