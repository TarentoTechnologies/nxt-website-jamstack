import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { PricingCard } from "../PricingCard";

const baseListData = ["Full perpetual license", "100 hours for implementation"];

describe("Test if the PricingCard component is working as expected", () => {
  it("<PricingCard /> matches snapshot", () => {
    const component = render(
      <PricingCard
        title={"RAIN"}
        logo={
          "https://strapi-stage-nxt.tarento.com/uploads/rain_with_circle_ae2744ceec.svg"
        }
        description={
          "Real time analytics and insights from your business data."
        }
        spTitle={""}
        baseList={baseListData}
        basePrice="€25K"
        supportList={baseListData}
        supportPrice="€3000 per year"
        supportSubText="(Optional)"
        supportText="Support"
        withBtn={false}
        CTAlabel={"Contact us"}
        CTAlink={"/"}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<PricingCard /> renders without exploding", () => {
    const component = render(
      <PricingCard
        title={"RAIN"}
        logo={
          "https://strapi-stage-nxt.tarento.com/uploads/rain_with_circle_ae2744ceec.svg"
        }
        description={
          "Real time analytics and insights from your business data."
        }
        spTitle={""}
        baseList={baseListData}
        basePrice="€25K"
        supportList={baseListData}
        supportPrice="€3000 per year"
        supportSubText="(Optional)"
        supportText="Support"
        withBtn={false}
        CTAlabel={"Contact us"}
        CTAlink={"/"}
      />
    );
    expect(component.getByTestId("pricing-card")).toBeInTheDocument();
  });
});
