import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { PrimaryCTACard } from "../PrimaryCTACard";

describe("Test if the PrimaryCTACard component is working as expected", () => {
  it("<PrimaryCTACard /> matches snapshot", () => {
    const component = render(
      <PrimaryCTACard
        title={"Are you interested ?"}
        description="Do these accelerators look interesting to you? Get in touch with us to know how to buy any of them. Click on the button below to send us a mail."
        ctaText={"Contact us"}
        ctaLink={"/"}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<PrimaryCTACard /> renders without exploding", () => {
    const component = render(
      <PrimaryCTACard
        title={"Are you interested ?"}
        description="Do these accelerators look interesting to you? Get in touch with us to know how to buy any of them. Click on the button below to send us a mail."
        ctaText={"Contact us"}
        ctaLink={"/"}
      />
    );
    expect(component.getByTestId("primary-cta-card")).toBeInTheDocument();
  });
});
