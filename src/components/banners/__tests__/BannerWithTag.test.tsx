import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { BannerWithTag } from "../BannerWithTag";

const data = {
  title: "The Design tools and Technology that we use to support CIBoost",
  tagsList: [
    {
      id: 0,
      Label: "Sketch",
    },
    {
      id: 1,
      Label: "Photoshop",
    },
    {
      id: 2,
      Label: "HTML",
    },
    {
      id: 3,
      Label: "React",
    },
    {
      id: 4,
      Label: "PHP",
    },
  ],
};

describe("Test if the BannerWithTag component is working as expected", () => {
  it("<BannerWithTag /> matches snapshot", () => {
    const component = render(
      <BannerWithTag
        data-testid="banner-with-tag"
        title={data.title}
        tagsList={data.tagsList}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<BannerWithTag /> renders without exploding", () => {
    const component = render(
      <BannerWithTag
        data-testid="banner-with-tag"
        title={data.title}
        tagsList={data.tagsList}
      />
    );
    expect(component.getByTestId("banner-with-tag")).toBeInTheDocument();
  });
});
