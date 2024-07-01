import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { PortfolioCard } from "../PortfolioCard";

const imgData = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        placeholder: {
          fallback:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwAEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAFF5DFvgk//xAAcEAACAgIDAAAAAAAAAAAAAAABAgADBBASExT/2gAIAQEAAQUCS8iG9RPTVrHY8upJ/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bh//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/Aaf/xAAeEAABAgcBAAAAAAAAAAAAAAAAASEQERIjMTJBUf/aAAgBAQAGPwK4kh0b0xCni8NT/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAERITFBkf/aAAgBAQABPyGH9KkuFtuEJCiXgr2zRbTwN7dD/9oADAMBAAIAAwAAABBE7//EABcRAAMBAAAAAAAAAAAAAAAAAAABEUH/2gAIAQMBAT8Qe0U//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEhUf/aAAgBAgEBPxBbRD//xAAcEAEAAgIDAQAAAAAAAAAAAAABABEhMUFRgXH/2gAIAQEAAT8QtVt1gPzkhRaGsB9uDtDtse+RbVywIyjaBXjEpuXtn//Z",
        },
        images: {
          fallback: {
            src: "/static/eebf97735cd812347673b4702603b08e/c3ed2/482_560x300_8f22c74ee4.png",
            srcSet:
              "/static/eebf97735cd812347673b4702603b08e/b131f/482_560x300_8f22c74ee4.png 140w,\n/static/eebf97735cd812347673b4702603b08e/5618b/482_560x300_8f22c74ee4.png 280w,\n/static/eebf97735cd812347673b4702603b08e/c3ed2/482_560x300_8f22c74ee4.png 560w",
            sizes: "(min-width: 560px) 560px, 100vw",
          },
          sources: [],
        },
        width: 560,
        height: 300,
      },
    },
  },
};

describe("Test if the PortfolioCard component is working as expected", () => {
  it("<PortfolioCard /> matches snapshot", () => {
    const component = render(
      <PortfolioCard
        title={"Spinverse"}
        description={
          "CIBoost is a collective intelligence platform.  A team efficiency enhancement tool that will revolutionize team performance as we know it! Built on a methodology that has been proved to increase performance by up to 2x."
        }
        ctaText={"Read More"}
        ctaLink={"https://www.google.com"}
        tag="Gov"
        imgSrc={imgData}
        tagVariant="orange"
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<PortfolioCard /> renders without exploding", () => {
    const component = render(
      <PortfolioCard
        title={"Spinverse"}
        description={
          "CIBoost is a collective intelligence platform.  A team efficiency enhancement tool that will revolutionize team performance as we know it! Built on a methodology that has been proved to increase performance by up to 2x."
        }
        ctaText={"Read More"}
        ctaLink={"https://www.google.com"}
        tag="Gov"
        imgSrc={imgData}
        tagVariant="orange"
      />
    );
    expect(component.getByTestId("portfolio-card")).toBeInTheDocument();
  });
});
