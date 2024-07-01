import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import TarentoLogo from "../../../../static/images/company-logo.svg";
import NXTlogo from "../../../../static/images/logo-inner.svg";
import { Footer } from "../Footer";

const footerData = {
  nxtLogoImg: NXTlogo,
  nxtLogoImgTitle: "NXT-logo",
  companyLogoImg: TarentoLogo,
  companyLogoImgTitle: "Tarento-logo",
  description:
    "NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento. We take pride in being unconventional with our approaches while retaining the passion with which we work.",
  mailId: "hello@tarento.com",
  levelOneHeading: "Direct Links",
  levelOneList: [
    { title: "Home", href: "nxt.html" },
    { title: "Technology", href: "technology.html" },
    { title: "Design", href: "design-process.html" },
    { title: "Innovation", href: "nxt-innovation.html" },
    { title: "Pricing", href: "pricing.html" },
  ],
  levelTwoHeading: "Tech & Innovations",
  levelTwoList: [
    { title: "Bolt - Data Platform", href: "data-platform.html" },
    { title: "Rain - Analytics", href: "rain.html" },
    { title: "Thor - Chatbot", href: "thor.html" },
    { title: "GovTech", href: "govtech.html" },
    { title: "Customer Experience", href: "customer-experience.html" },
  ],
  levelThreeHeading: "Direct Links",
  levelThreeList: [
    { title: "Home", href: "https://www.tarento.com/" },
    { title: "About us", href: "https://www.tarento.com/about/" },
    { title: "Services", href: "https://www.tarento.com/services/" },
    { title: "Careers", href: "https://www.tarento.com/careers/" },
  ],
  levelFourHeading: "Programmes",
  levelFourList: [
    { title: "Lead", href: "https://www.tarento.com/lead/" },
    { title: "Blixt", href: "https://www.tarento.com/blixt/" },
  ],
  rightsText: "All rights reserved © 2023 Tarento Technologies.",
};

describe("Test if the Footer component is working as expected", () => {
  it("<Footer /> matches snapshot", () => {
    const component = render(<Footer data-testid="footer" data={footerData} />);
    expect(component.container).toMatchSnapshot();
  });

  it("<Footer /> renders without exploding", () => {
    const component = render(<Footer data-testid="footer" data={footerData} />);
    expect(component.getByTestId("footer")).toBeInTheDocument();
  });
});
