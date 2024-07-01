import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { HeroBanner } from "../HeroBanner";

const data = {
  PrimaryImage: {
    alternativeText: "NXT Logo",
    caption: "NXT Logo",
    id: "a02eb78b-c216-5263-86ca-bd30c281f873",
    localFile: {
      url: "https://strapi-stage-nxt.tarento.com/uploads/logo_main_b45ca700bb.svg",
    },
  },
  SecondaryImage: {
    alternativeText: "NXT logo description",
    caption: "NXT logo description",
    id: "b6e466bf-0c08-5cd8-b72c-edcd2b17c642",
    localFile: {
      url: "https://strapi-stage-nxt.tarento.com/uploads/logo_head_b1dd3ba367.svg",
    },
  },
};

describe("Test if the HeroBanner component is working as expected", () => {
  it("<HeroBanner /> matches snapshot", () => {
    const component = render(<HeroBanner data={data} />);
    expect(component.container).toMatchSnapshot();
  });

  it("<HeroBanner /> renders without exploding", () => {
    const component = render(<HeroBanner data={data} />);
    expect(component.getByTestId("hero-banner")).toBeInTheDocument();
  });
});
