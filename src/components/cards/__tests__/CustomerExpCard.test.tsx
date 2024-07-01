import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { CustomerExpCard } from "../CustomerExpCard";

describe("Test if the CustomerExpCard component is working as expected", () => {
  it("<CustomerExpCard /> matches snapshot", () => {
    const component = render(
      <CustomerExpCard
        id="b72407f9-f344-56a7-b959-8c53650a273d"
        title="Intuitive Experience"
        description="Make the experience as intuitive as possible. Avoid chances for errors, confusion. Ensure that your users have sufficient self help materials when they want to know more. Capture telemetry to understand user behaviour anonymously."
        logo="https://strapi-stage-nxt.tarento.com/uploads/experience_285006c250.svg"
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<CustomerExpCard /> renders without exploding", () => {
    const component = render(
      <CustomerExpCard
        id="b72407f9-f344-56a7-b959-8c53650a273d"
        title="Intuitive Experience"
        description="Make the experience as intuitive as possible. Avoid chances for errors, confusion. Ensure that your users have sufficient self help materials when they want to know more. Capture telemetry to understand user behaviour anonymously."
        logo="https://strapi-stage-nxt.tarento.com/uploads/experience_285006c250.svg"
      />
    );
    expect(component.getByTestId("customer-exp-card")).toBeInTheDocument();
  });
});
