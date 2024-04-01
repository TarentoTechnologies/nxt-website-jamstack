import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { PrimaryTitle } from "../PrimaryTitle";

describe("Test if the PrimaryTitle component is working as expected", () => {
  it("<PrimaryTitle /> matches snapshot", () => {
    const component = render(
      <PrimaryTitle data-testid="primary-title" title={"Case Studies"} />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<PrimaryTitle /> renders without exploding", () => {
    const component = render(
      <PrimaryTitle data-testid="primary-title" title={"Case Studies"} />
    );
    expect(component.getByTestId("primary-title")).toBeInTheDocument();
  });
});
