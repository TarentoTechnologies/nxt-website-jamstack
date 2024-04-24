import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { DesignProcessCard } from "../DesignProcessCard";

describe("Test if the DesignProcessCard component is working as expected", () => {
  it("<DesignProcessCard /> matches snapshot", () => {
    const component = render(
      <DesignProcessCard
        title="Discover"
        icon={
          "https://strapi-stage-nxt.tarento.com/uploads/discover_img_4bc56123b0.svg"
        }
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<DesignProcessCard /> renders without exploding", () => {
    const component = render(
      <DesignProcessCard
        title="Discover"
        icon={
          "https://strapi-stage-nxt.tarento.com/uploads/discover_img_4bc56123b0.svg"
        }
      />
    );
    expect(component.getByTestId("design-process-card")).toBeInTheDocument();
  });
});
