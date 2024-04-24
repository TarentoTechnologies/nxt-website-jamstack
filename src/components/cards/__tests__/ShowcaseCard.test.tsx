import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { ShowcaseCard } from "../ShowcaseCard";

const imgData = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        placeholder: {
          fallback:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHLWq1MoH//xAAZEAACAwEAAAAAAAAAAAAAAAAAEQEQITH/2gAIAQEAAQUCWaIjlf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABsQAAEEAwAAAAAAAAAAAAAAAAABEBFxMUFR/9oACAEBAAE/IdiTNC2JcMNP/9oADAMBAAIAAwAAABAwD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABcRAQADAAAAAAAAAAAAAAAAAAABESH/2gAIAQIBAT8QnVP/xAAcEAEAAQQDAAAAAAAAAAAAAAABEQAQITFhkbH/2gAIAQEAAT8QJlFDUvaDwnauVbHdv//Z",
        },
        images: {
          fallback: {
            src: "/static/c5ab777b81ede6691c6b6d65988b39cb/02c3d/features_1_6765d2890b.png",
            srcSet:
              "/static/c5ab777b81ede6691c6b6d65988b39cb/07064/features_1_6765d2890b.png 193w,\n/static/c5ab777b81ede6691c6b6d65988b39cb/35e06/features_1_6765d2890b.png 386w,\n/static/c5ab777b81ede6691c6b6d65988b39cb/02c3d/features_1_6765d2890b.png 772w",
            sizes: "(min-width: 772px) 772px, 100vw",
          },
          sources: [],
        },
        width: 772,
        height: 354,
      },
    },
  },
};

describe("Test if the ShowcaseCard component is working as expected", () => {
  it("<ShowcaseCard /> matches snapshot", () => {
    const component = render(
      <ShowcaseCard
        imgSrc={imgData}
        imgAlt={"img1"}
        title={"Bihar Museum"}
        description={"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"}
        ctaText={"Read More"}
        ctaLink={"/"}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<ShowcaseCard /> renders without exploding", () => {
    const component = render(
      <ShowcaseCard
        imgSrc={imgData}
        imgAlt={"Logo"}
        title={"Bihar Museum"}
        description={"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"}
        ctaText={"Read More"}
        ctaLink={"/"}
      />
    );
    expect(component.getByTestId("showcase-card")).toBeInTheDocument();
  });
});
