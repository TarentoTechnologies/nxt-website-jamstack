import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { InnoTableCard } from "../InnoTableCard";

describe("Test if the InnoTableCard component is working as expected", () => {
  it("<InnoTableCard /> matches snapshot", () => {
    const component = render(
      <InnoTableCard
        title={"TECHNOLOGY"}
        desc={
          "Our tech stack is crafted compact to abide by our technology serving principles to build for the future!"
        }
        bgColor={"blue"}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<InnoTableCard /> renders without exploding", () => {
    const component = render(
      <InnoTableCard
        title={"TECHNOLOGY"}
        desc={
          "Our tech stack is crafted compact to abide by our technology serving principles to build for the future!"
        }
        bgColor={"blue"}
      />
    );
    expect(component.getByTestId("inno-table-card")).toBeInTheDocument();
  });
});
