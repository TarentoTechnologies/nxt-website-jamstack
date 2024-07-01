import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { ProductCard } from "../ProductCard";

describe("Test if the ProductCard component is working as expected", () => {
  it("<ProductCard /> matches snapshot", () => {
    const component = render(
      <ProductCard
        title={"Bolt - Data platform"}
        bgImg={
          "https://strapi-stage-nxt.tarento.com/uploads/tech_bolt_2f3dc77aa7.png"
        }
        logo={
          "https://strapi-stage-nxt.tarento.com/uploads/tech_bolt_dark_94a1e2c631.svg"
        }
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<ProductCard /> renders without exploding", () => {
    const component = render(
      <ProductCard
        title={"Bolt - Data platform"}
        bgImg={
          "https://strapi-stage-nxt.tarento.com/uploads/tech_bolt_2f3dc77aa7.png"
        }
        logo={
          "https://strapi-stage-nxt.tarento.com/uploads/tech_bolt_dark_94a1e2c631.svg"
        }
      />
    );
    expect(component.getByTestId("product-card")).toBeInTheDocument();
  });
});
