import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { DesignProcessBanner } from "../DesignProcessBanner";

const data = {
  heading: "Discover",
  description: {
    data: {
      childMarkdownRemark: {
        html: "<p>In the discovery stage, we work closely with the client to define our understanding of the problem.</p>\n<p><strong>Primary and Secondary Research</strong></p>\n<p>To diverge and understand more about the problem area, we conduct user research and secondary research from any source available. We create personas to identify our users, map user journeys to find the pain points.</p>",
      },
    },
  },
  descriptionAlignment: "right",
  image: {
    alternativeText: "discover process",
    id: "1cebd1e0-d090-5a86-9db7-42caac85f629",
    localFile: {
      childImageSharp: {
        gatsbyImageData: {
          layout: "constrained",
          backgroundColor: "#9898c8",
          images: {
            fallback: {
              src: "http://localhost:8000/static/d8556e7d840b4fa5b66d2c2e806ec9c3/b53dd/discover_pro_9a68b674f0.png",
              srcSet:
                "http://localhost:8000/static/d8556e7d840b4fa5b66d2c2e806ec9c3/4e18a/discover_pro_9a68b674f0.png 172w,\nhttp://localhost:8000//static/d8556e7d840b4fa5b66d2c2e806ec9c3/c6a26/discover_pro_9a68b674f0.png 345w,\nhttp://localhost:8000//static/d8556e7d840b4fa5b66d2c2e806ec9c3/b53dd/discover_pro_9a68b674f0.png 689w",
              sizes: "(min-width: 689px) 689px, 100vw",
            },
            sources: [],
          },
          width: 689,
          height: 341,
        },
      },
    },
  },
  bgGray: true,
};

describe("Test if the DesignProcessBanner component is working as expected", () => {
  it("<DesignProcessBanner /> matches snapshot", () => {
    const component = render(
      <DesignProcessBanner
        data-testid="design-process-banner"
        heading={data.heading}
        description={data.description}
        descriptionAlignment={data.descriptionAlignment}
        image={data.image}
        bgGray={data.bgGray}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<DesignProcessBanner /> renders without exploding", () => {
    const component = render(
      <DesignProcessBanner
        data-testid="design-process-banner"
        heading={data.heading}
        description={data.description}
        descriptionAlignment={data.descriptionAlignment}
        image={data.image}
        bgGray={data.bgGray}
      />
    );
    expect(component.getByTestId("design-process-banner")).toBeInTheDocument();
  });
});
