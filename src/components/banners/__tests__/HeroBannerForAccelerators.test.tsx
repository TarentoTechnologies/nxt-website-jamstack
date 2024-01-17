import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { HeroBannerForAccelerators } from "../HeroBannerForAccelerators";

const data = {
  id: "4aec6f6e-62a4-5029-9c85-331e9a91603a",
  Title: "Data. Information. Insight.",
  SubText: "Supercharge your business with the power of Data.",
  Description:
    "Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform.",
  Logo: {
    alternativeText: "bolt_light",
    caption: "bolt_light",
    localFile: {
      url: "https://strapi-stage-nxt.tarento.com/uploads/bolt_light_df3a6f2e25.svg",
    },
  },
  Image: {
    alternativeText: "data-platform",
    caption: "data-platform",
    localFile: {
      childImageSharp: {
        gatsbyImageData: {
          height: 839,
          images: {
            fallback: {
              sizes: "(min-width: 786px) 786px, 100vw",
              src: "/static/8afccf7dc2c496868e9783df2c8a76b8/a4367/data_platform_2cb1ba726e.png",
              srcSet:
                "/static/8afccf7dc2c496868e9783df2c8a76b8/2a3f3/data_platform_2cb1ba726e.png 197w,\n/static/8afccf7dc2c496868e9783df2c8a76b8/fdd58/data_platform_2cb1ba726e.png 393w,\n/static/8afccf7dc2c496868e9783df2c8a76b8/a4367/data_platform_2cb1ba726e.png 786w",
            },
            layout: "constrained",
            placeholder: {
              fallback:
                "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIDAQT/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAfbtN7aSCdQugv/EABoQAAMAAwEAAAAAAAAAAAAAAAECAwQSExH/2gAIAQEAAQUCedWvqdZeohuBdn5zg/abY693UUSMhFP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/AXRlz//EABwQAAICAwEBAAAAAAAAAAAAAAABAhESE2ExQf/aAAgBAQAGPwK1JqA0sn0pycus1USm4+GVUbrdjg/pim2f/8QAGRABAQEBAQEAAAAAAAAAAAAAAREAMSFB/9oACAEBAAE/IfYWHg4FZHj+YUZuLm6oXP1n4D0wQ9EjlcP7Pmu0AlNA4trv/9oADAMBAAIAAwAAABCDCD7/xAAWEQEBAQAAAAAAAAAAAAAAAAARASD/2gAIAQMBAT8QaGP/xAAZEQADAQEBAAAAAAAAAAAAAAAAAREhMWH/2gAIAQIBAT8Q4YRd6U54Ntus/8QAHRABAQACAwEBAQAAAAAAAAAAAREAITFBcVGBwf/aAAgBAQABPxBwkhWQke/uG9FsrQcVzfkT2ed4QThKAUvuBLCfcYDf3NI9sK6wOwQ2nAny4qIxcpG/zAlRUl35n//Z",
            },
            width: 786,
          },
        },
      },
    },
  },
};

describe("Test if the HeroBannerForAccelerators component is working as expected", () => {
  it("<HeroBannerForAccelerators /> matches snapshot", () => {
    const component = render(
      <HeroBannerForAccelerators
        title={data.Title}
        description={data.Description}
        img={data.Image}
        logosrc={data.Logo}
        subText={data.SubText}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<HeroBannerForAccelerators /> renders without exploding", () => {
    const component = render(
      <HeroBannerForAccelerators
        title={data.Title}
        description={data.Description}
        img={data.Image}
        logosrc={data.Logo}
        subText={data.SubText}
      />
    );
    expect(
      component.getByTestId("hero-banner-for-accelerators")
    ).toBeInTheDocument();
  });
});
