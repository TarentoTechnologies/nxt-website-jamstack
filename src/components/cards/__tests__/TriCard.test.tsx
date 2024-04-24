import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { TriCard } from "../TriCard";

describe("Test if the TriCard component is working as expected", () => {
  it("<TriCard /> matches snapshot", () => {
    const component = render(
      <TriCard
        title={"TECHNOLOGY"}
        logo={
          "https://strapi-stage-nxt.tarento.com/uploads/technology_de1bb99b6d.svg"
        }
        bgColor={"blue"}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<TriCard /> renders without exploding", () => {
    const component = render(
      <TriCard
        title={"TECHNOLOGY"}
        logo={
          "https://strapi-stage-nxt.tarento.com/uploads/technology_de1bb99b6d.svg"
        }
        bgColor={"blue"}
      />
    );
    expect(component.getByTestId("tri-card")).toBeInTheDocument();
  });
});
