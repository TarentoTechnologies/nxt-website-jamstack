import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { SecondaryCTA } from "../SecondaryCTA";

describe("Test if the SecondaryCTA component is working as expected", () => {
  it("<SecondaryCTA /> matches snapshot", () => {
    const component = render(
      <SecondaryCTA data-testid="secondary-cta" label="Register Now" />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<SecondaryCTA /> renders without exploding", () => {
    const component = render(
      <SecondaryCTA data-testid="secondary-cta" label="Register Now" />
    );
    expect(component.getByTestId("secondary-cta")).toBeInTheDocument();
  });
});
