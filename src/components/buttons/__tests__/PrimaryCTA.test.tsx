import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { PrimaryCTA } from "../PrimaryCTA";

describe("Test if the PrimaryCTA component is working as expected", () => {
  it("<PrimaryCTA /> matches snapshot", () => {
    const component = render(
      <PrimaryCTA data-testid="primary-cta" label="Register Now" primary />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<PrimaryCTA /> renders without exploding", () => {
    const component = render(
      <PrimaryCTA data-testid="primary-cta" label="Register Now" primary />
    );
    expect(component.getByTestId("primary-cta")).toBeInTheDocument();
  });
});
