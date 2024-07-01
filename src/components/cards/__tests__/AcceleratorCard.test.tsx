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
        description={
          "Data engineering at scale. Validate, transform and enrich your data for high quality data usecases."
        }
        logoLightSrc={
          "https://strapi-stage-nxt.tarento.com/uploads/bolt_light_f208259cd2.svg"
        }
        logoDarkSrc={
          "https://strapi-stage-nxt.tarento.com/uploads/bolt_dark_c35a2582e8.svg"
        }
        bgImg={
          "https://strapi-stage-nxt.tarento.com/uploads/data_platform_593cf8006d.svg"
        }
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<AcceleratorCard /> renders without exploding", () => {
    const component = render(
      <AcceleratorCard
        data-testid="accelerator-card"
        title={"BOLT - Data Platform"}
        description={
          "Data engineering at scale. Validate, transform and enrich your data for high quality data usecases."
        }
        logoLightSrc={
          "https://strapi-stage-nxt.tarento.com/uploads/bolt_light_f208259cd2.svg"
        }
        logoDarkSrc={
          "https://strapi-stage-nxt.tarento.com/uploads/bolt_dark_c35a2582e8.svg"
        }
        bgImg={
          "https://strapi-stage-nxt.tarento.com/uploads/data_platform_593cf8006d.svg"
        }
      />
    );
    expect(component.getByTestId("accelerator-card")).toBeInTheDocument();
  });
});
