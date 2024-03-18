import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { PortfolioCarousel } from "../PortfolioCarousel";

describe("Test if the PortfolioCarousel component is working as expected", () => {
  it("<PortfolioCarousel /> matches snapshot", () => {
    const component = render(
      <PortfolioCarousel data-testid="portfolio-carousel" />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<PortfolioCarousel /> renders without exploding", () => {
    const component = render(
      <PortfolioCarousel data-testid="portfolio-carousel" />
    );
    expect(component.getByTestId("portfolio-carousel")).toBeInTheDocument();
  });
});
