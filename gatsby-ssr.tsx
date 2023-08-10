import React from "react";
import { RecoilRoot } from "recoil";

interface wrapperProps {
  element: any;
  props: any;
}

export const wrapRootElement = ({ element, props }: wrapperProps) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>;
};
