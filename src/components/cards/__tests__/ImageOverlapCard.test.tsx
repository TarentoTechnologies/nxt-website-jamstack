import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { ImageOverlapCard } from "../ImageOverlapCard";

const imgData = {
  alternativeText: "Person designing a sitemap for a website",
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        placeholder: {
          fallback:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAAB1VrEzWSIF//EABwQAQABBAMAAAAAAAAAAAAAAAEAAgMEESEyM//aAAgBAQABBQI0F1CHBMjyp6//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAWEQEBAQAAAAAAAAAAAAAAAAARECH/2gAIAQIBAT8BdJ//xAAYEAADAQEAAAAAAAAAAAAAAAAAASEQEf/aAAgBAQAGPwKC6oyYxH//xAAYEAADAQEAAAAAAAAAAAAAAAAAARExof/aAAgBAQABPyHOJDeKkoqlgeD8jmP/2gAMAwEAAgADAAAAEKDP/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBFB/9oACAEDAQE/EFR//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARcf/aAAgBAgEBPxA1wlv/xAAcEAEBAQABBQAAAAAAAAAAAAABEQAhMVFhkbH/2gAIAQEAAT8QERtWGVIBJjXx03fEcm+czZeKPeaoqqPm/9k=",
        },
        images: {
          fallback: {
            src: "/static/384eeb371f7305cd9cd8e26f391b4cd7/a6312/Person_designing_a_sitemap_for_a_website_redesign_c5a8151767.png",
            srcSet:
              "/static/384eeb371f7305cd9cd8e26f391b4cd7/e20c6/Person_designing_a_sitemap_for_a_website_redesign_c5a8151767.png 300w,\n/static/384eeb371f7305cd9cd8e26f391b4cd7/62ea7/Person_designing_a_sitemap_for_a_website_redesign_c5a8151767.png 600w,\n/static/384eeb371f7305cd9cd8e26f391b4cd7/a6312/Person_designing_a_sitemap_for_a_website_redesign_c5a8151767.png 1200w",
            sizes: "(min-width: 1200px) 1200px, 100vw",
          },
          sources: [],
        },
        width: 1200,
        height: 600,
      },
    },
  },
};

const desc = {
  data: {
    id: "9b078a46-9cae-558a-90d3-8a33fe2878f9",
    childMarkdownRemark: {
      html: "<p>From The Scratch - To build new experiences ground-up. we take utmost care to dive deep into problem space by employing first principles to figure out the fundamental truths that goes ignored otherwise</p>",
    },
  },
};

describe("Test if the ImageOverlapCard component is working as expected", () => {
  it("<ImageOverlapCard /> matches snapshot", () => {
    const component = render(
      <ImageOverlapCard
        img={imgData}
        content={desc}
        subTitle={"ALPHA Sprint i.e. Build From the Scratch"}
        textPos="right"
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<ImageOverlapCard /> renders without exploding", () => {
    const component = render(
      <ImageOverlapCard
        img={imgData}
        content={desc}
        subTitle={"ALPHA Sprint i.e. Build From the Scratch"}
        textPos="right"
      />
    );
    expect(component.getByTestId("image-overlap-card")).toBeInTheDocument();
  });
});
