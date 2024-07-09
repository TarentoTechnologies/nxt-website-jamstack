/* eslint-disable react/display-name */
import React from "react";

import { HubSpotForm } from "../../../components";

interface FormProps {
  sectionTitle: string;
  sectionDescription: any;
}

export const Form = ({ sectionTitle, sectionDescription }: FormProps) => {
  return (
    <HubSpotForm
      title={sectionTitle}
      description={sectionDescription}
      col={2}
    />
  );
};
