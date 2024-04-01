import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import navbarImg from "../../../../static/images/logo-inner.svg";
import { Navbar } from "../Navbar";

describe("Test if the Navbar component is working as expected", () => {
  it("<Navbar /> matches snapshot", () => {
    const component = render(
      <Navbar
        data-testid="navbar"
        imgSrc={navbarImg}
        imgAltText={"NXT Logo"}
        link={"/"}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<Navbar /> renders without exploding", () => {
    const component = render(
      <Navbar
        data-testid="navbar"
        imgSrc={navbarImg}
        imgAltText={"NXT Logo"}
        link={"/"}
      />
    );
    expect(component.getByTestId("navbar")).toBeInTheDocument();
  });
});
