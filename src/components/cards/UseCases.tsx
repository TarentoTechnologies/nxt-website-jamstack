import React from "react";

import { useCasesSubTitle } from "./UseCases.module.css";

interface UseCasesProps {
  title: string;
  imgSrc: string;
}

export const UseCases = ({ title, imgSrc }: UseCasesProps) => {
  return (
    <div className="layoutDetails d-feature useCases" data-testid="use-cases">
      <div className={`col-md-4 col-sm-6 col-xs-12 d-flex align-items-center`}>
        <div className="">
          <img src={imgSrc} alt={title} title={title} />
        </div>
        <div className="">
          <div className={useCasesSubTitle}>{title}</div>
        </div>
      </div>
    </div>
  );
};
