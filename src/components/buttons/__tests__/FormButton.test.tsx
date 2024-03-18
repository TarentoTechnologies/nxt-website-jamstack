import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { FormButton } from "../FormButton";

describe("Test if the FormButton component is working as expected", () => {
  it("<FormButton /> matches snapshot", () => {
    const component = render(
      <FormButton data-testid="form-button" label="Request a Demo" isEmail />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<FormButton /> renders without exploding", () => {
    const component = render(
      <FormButton data-testid="form-button" label="Request a Demo" isEmail />
    );
    expect(component.getByTestId("form-button")).toBeInTheDocument();
  });
});
