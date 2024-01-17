import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { HeroBannerForTDI } from "../HeroBannerForTDI";

const data = {
  id: "89912a37-a072-5239-988c-5cca28cdf704",
  Title: "Technology, like art, is a soaring exercise of the human imagination",
  Description: {
    data: {
      childMarkdownRemark: {
        html: "Words by one of the greatest sociologists - Daniel Bell\nTechnology is akin to language in the world of contributing ideas. It's a key arsenal for innovation.",
      },
    },
  },
  Img: {
    localFile: {
      childImageSharp: {
        gatsbyImageData: {
          height: 1164,
          images: {
            fallback: {
              sizes: "(min-width: 930px) 930px, 100vw",
              src: "/static/e69b1cdf9d4ee59dca8f2c06a35f8455/9ef3b/tech_hero_deb1d828ab.png",
              srcSet:
                "/static/e69b1cdf9d4ee59dca8f2c06a35f8455/2a2fc/tech_hero_deb1d828ab.png 233w,\n/static/e69b1cdf9d4ee59dca8f2c06a35f8455/4c337/tech_hero_deb1d828ab.png 465w,\n/static/e69b1cdf9d4ee59dca8f2c06a35f8455/9ef3b/tech_hero_deb1d828ab.png 930w",
            },
            layout: "constrained",
            placeholder: {
              fallback:
                "data:image/png;base64,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",
            },
            width: 930,
          },
        },
      },
      url: "https://strapi-stage-nxt.tarento.com/uploads/tech_hero_deb1d828ab.png",
    },
  },
  withLogo: false,
  isImage: true,
};

describe("Test if the HeroBannerForTDI component is working as expected", () => {
  it("<HeroBannerForTDI /> matches snapshot", () => {
    const component = render(
      <HeroBannerForTDI
        id={data.id}
        title={data.Title}
        description={data.Description}
        img={data.Img.localFile}
        isImage={data.isImage}
        withLogo={data.withLogo}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<HeroBannerForTDI /> renders without exploding", () => {
    const component = render(
      <HeroBannerForTDI
        id={data.id}
        title={data.Title}
        description={data.Description}
        img={data.Img.localFile}
        isImage={data.isImage}
        withLogo={data.withLogo}
      />
    );
    expect(component.getByTestId("hero-banner-for-tdi")).toBeInTheDocument();
  });
});
