import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { BreadCrumb } from "../BreadCrumb";

const data = [
  {
    label: "AgencyPortfolio",
    url: "/agency-portfolio",
  },
  {
    label: "Bihar Museum",
    url: "/agency-portfolio/bihar-museum",
  },
];

describe("Test if the BreadCrumb component is working as expected", () => {
  it("<BreadCrumb /> matches snapshot", () => {
    const component = render(<BreadCrumb items={data} />);
    expect(component.container).toMatchSnapshot();
  });

  it("<BreadCrumb /> renders without exploding", () => {
    const component = render(<BreadCrumb items={data} />);
    expect(component.getByTestId("bread-crumb")).toBeInTheDocument();
  });
});
