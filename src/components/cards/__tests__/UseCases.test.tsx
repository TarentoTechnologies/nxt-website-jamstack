import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { UseCases } from "../UseCases";

describe("Test if the UseCases component is working as expected", () => {
  it("<UseCases /> matches snapshot", () => {
    const component = render(
      <UseCases
        title={"Usecase1"}
        imgSrc={
          "https://strapi-stage-nxt.tarento.com/uploads/tech_bolt_2f3dc77aa7.png"
        }
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<UseCases /> renders without exploding", () => {
    const component = render(
      <UseCases
        title={"Usecase1"}
        imgSrc={
          "https://strapi-stage-nxt.tarento.com/uploads/tech_bolt_2f3dc77aa7.png"
        }
      />
    );
    expect(component.getByTestId("use-cases")).toBeInTheDocument();
  });
});
