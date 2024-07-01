import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

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

const imgData = {
  childImageSharp: {
    gatsbyImageData: {
      layout: "constrained",
      placeholder: {
        fallback:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAC4jAAAuIwF4pT92AAACvUlEQVR42q2UXUhTYRjHp+587wOkiwq8m05W4gcIMrFSp1teCF7sygK982ZBJNqFjQLtItM06WIXQSGOHS3namYq80wnJsSqOV2YSjey2UaU1TLynPP0nvm1wDGCHvid/3s4z/md933P4chkSWU2m7N0Oh1+gEajISRk+3mEiTCZEBYLwXGcXHZMZUgHgiT7MBz/iBPEEkaQK4jQHkSIQImuhwiKClE0HaIZ5QqjUK5lZ5/wNFosqmRPxoEVJ6lpkiSBoigeASlBPahPJAgC0ENiDQ2Np1IIySnpBpqmdxFiGgSpF4mjhvr606mE0/tCHgFpEOk9YcxobEg5w2mpmWEYHgFpEBmGRkIqer7OfDJZeFjohUxJzQqFgkdAGkQpSYqKGQx/L/lIiGEv/1mIlqzXG44XoiVPKpVKUKtUPALU6lSoJUQV6qFp6lhhYpApl7/ApU+BIHkpE+BJicAwHCUupSiXYyixaF3yHgJAQoaS6R8YWG5qbobKqhqh1lgHNbUmqDVehKoqA1RWGqDi3AXQ6yugrKwcSkpKxepqA1hvWXdn5ubK9x2Z0iFLOvka32n58v0HXLrcJOTkaKC4uBR0ukLIy9OBVnsWNJp8lGcgT6uDgoIiyM3VonE+z81y8GFtbdZms2GHexeJRJjt+M7y5qcYPBoc2u3tuy903u4SrDetwrXWVqHtervQ1t4mdNzoEDq7OoWe3m6h916P0H33juB0OX8HQyFY9PuvHgq34/EraKbw7ecvPhz7DKvrG/Am8A642RkYecoCO+KA4ScsOFg7OIbt4Ho+CmOuUZiYdIN3jhPfLgUgsByMezyewoQwvLXVEolGXZvhsH19Y4N9v7rKBoNB1u9/zfp8XsfCwrx9cfHVkNfrGXQ/G3087nY+dLudtonxsQecZ6p/Yd7b7fN5+tGfp0j2v+sPIReLz2Ra9xMAAAAASUVORK5CYII=",
      },
      images: {
        fallback: {
          src: "/static/c3c04e30a647b67d02651bf87dd55afe/f4954/pngimg_com_laptop_PNG_101775_c0ab79f5b3.png",
          srcSet:
            "/static/c3c04e30a647b67d02651bf87dd55afe/0fcdd/pngimg_com_laptop_PNG_101775_c0ab79f5b3.png 877w,\n/static/c3c04e30a647b67d02651bf87dd55afe/12422/pngimg_com_laptop_PNG_101775_c0ab79f5b3.png 1753w,\n/static/c3c04e30a647b67d02651bf87dd55afe/f4954/pngimg_com_laptop_PNG_101775_c0ab79f5b3.png 3506w",
          sizes: "(min-width: 3506px) 3506px, 100vw",
        },
        sources: [],
      },
      width: 3506,
      height: 2805,
    },
  },
};

describe("Test if the BannerWithTag component is working as expected", () => {
  it("<BannerWithTag /> matches snapshot", () => {
    const component = render(
      <BannerWithTag
        data-testid="banner-with-tag"
        title={data.title}
        tagsList={data.tagsList}
        img={imgData}
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
        img={imgData}
      />
    );
    expect(component.getByTestId("banner-with-tag")).toBeInTheDocument();
  });
});
