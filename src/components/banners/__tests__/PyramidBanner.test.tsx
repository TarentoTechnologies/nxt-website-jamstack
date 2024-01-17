import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { PyramidBanner } from "../PyramidBanner";

const data = {
  PyramidTitle: "Data Pyramid",
  PyramidDescription:
    "Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform.",
  PyramidImage: {
    localFile: {
      url: "https://strapi-stage-nxt.tarento.com/uploads/pyramid_52b15649a1.svg",
    },
  },
  PyramidCTAText: "Read More",
  PyramidCTALink: "/data-platform",
};

describe("Test if the PyramidBanner component is working as expected", () => {
  it("<PyramidBanner /> matches snapshot", () => {
    const component = render(
      <PyramidBanner
        title={data.PyramidTitle}
        description={data.PyramidDescription}
        pyramidImg={data.PyramidImage.localFile.url}
        btnDescr={data.PyramidCTAText}
        btnLink={data.PyramidCTALink}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<PyramidBanner /> renders without exploding", () => {
    const component = render(
      <PyramidBanner
        title={data.PyramidTitle}
        description={data.PyramidDescription}
        pyramidImg={data.PyramidImage.localFile.url}
        btnDescr={data.PyramidCTAText}
        btnLink={data.PyramidCTALink}
      />
    );
    expect(component.getByTestId("pyramid-banner")).toBeInTheDocument();
  });
});
