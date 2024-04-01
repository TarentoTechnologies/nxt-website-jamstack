import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { AcceleratorCard } from "../AcceleratorCard";

describe("Test if the AcceleratorCard component is working as expected", () => {
  it("<AcceleratorCard /> matches snapshot", () => {
    const component = render(
      <AcceleratorCard
        data-testid="accelerator-card"
        title={"BOLT - Data Platform"}
        description={""}
        logoLightSrc={""}
        logoDarkSrc={""}
        bgImg={""}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<AcceleratorCard /> renders without exploding", () => {
    const component = render(
      <AcceleratorCard
        data-testid="accelerator-card"
        title={"BOLT - Data Platform"}
        description={""}
        logoLightSrc={""}
        logoDarkSrc={""}
        bgImg={""}
      />
    );
    expect(component.getByTestId("accelerator-card")).toBeInTheDocument();
  });
});
