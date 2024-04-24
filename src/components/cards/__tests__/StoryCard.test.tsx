import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { StoryCard } from "../StoryCard";

const imgData = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        placeholder: {
          fallback:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEpElEQVR42o2Ue0wUVxTGB7V/GOM/NWm1obbQ1NqExxJF0IpQoQgiIWIt4Q1lBaryEGhLpXUT3zyUoo2p70CbarexMdU2VhCSNjWtL9IK+2B57uzyKLrsArswc2fm672zIrE2sZuc3HNnM7/57jnfPRz3P34A5tLwYfnQ0MQLDoeQ4XSKZ1wucpuuozREQQDsvHjlWSAfGvNY7vFg6ZiLHHc4RIdIAFmGMj0NTE4qmJggsNkIusyS8izYXJaPjwt5k5PSGN3PgBSqiIyPE9npEhQbTxRDpwyjQfQ8Buh0ujltkZHz9Fu3ztXr9eoRwcGHHq+eQjDlgexySdKVlnblQMN3+PKrFljtLowMK+i4L8i9PYDZKBm9ajjOh8W/Vbpc4kmmiq6EHlluOH8NYVk1iNz3E9aWnEWydj9+u/k3PaoiDfQzIPmVA1XGXra+VxxgSy2q4jNK6viE3NMPb9xqoyVSxhyC5HFDMVpGEKutQYLeii13gcBLwJKkvThYexF9vZCsA4DFTM6qSro2a31HMkr7Re1ujKcUyZ7DpyAJTBmRxsYEiDT//W4PIvPrkdQ2heUXJHAngBe1jfho93H09EBVaLFImSpwKL3k67HsClhTdrrtOeXCqIkXXFMQXRTmdBLaRQn2YTcyyxoQUHkVC46JWLTXgmVxO3C26ReFqaMNGe7qUny5obSSlAeZZeAzSiVbcj4M1afhpk1wObwwqhIzKn9uNSH63XJoknZhVeIO7Dn4DUxGidhtQHe3fFxV58wqH3RklYNPK5Jt6SXSttx9aLxyC7IIOCiIAak9wFtF9FiAe/fG8f3lP9HaxqOnG7KlS0G3RRo1m+GvAvm04m8HUoseOtKLSXtOpRKTe0iOyjyAi1cplKgdho0XYegkNERmDfR2swaAek+QbLxql3zG0uupb5nX/siuWIzU7OU67f6jcYUNiM09RNZl7FOhjgdgPqM1Io+js4PuOwRp0E5rZyT1jy7CHK8HqZl1j6wTr61bFp9fOxhfcBQb8mrk1ckVOHaqGTztIFOnAulqMBK5j8EM5AwD6XQMhlkfT16KWCJcXnsYxkULV2fUBsRvqxuKSvsUK+Py5KCYHHx+8jqsfRRAlRqYRXrpMc+33QA4dj3nzAwOr8KmoAXytbfu0mi/eSR8PnuWkF2+InxT4VBY4nas2pg/rYnOQe3JZpisVGlLPxnM3g2Tf5hq4jadbt4T14uC/qJxm+XSj2u0E19oLrE8NGm7JnzT9sHwzaUI3Vggb4l9HzcL9sISmkjsy6NgXpVwRAXSkj0BlH5YXQx9+Hy0RqSgMQTuT/wLWE1RzS3kkj5+def6zBPNoYkwBcUoptfXKMaA9VOjKxPAa+IqZ3rw9KhqXpeFcxpMlC1NZ/upKr/7E5WvVav11bwd3B+wXjYHRsum4FjRFhKHrqB3Bu6HxLzpHSzehs7CrkcUKueC4al4OevOCu656c/82qf3+N1z7vJ9nv3fEblxca8mdoTXbMAADWNg9AVjSMxLM1PqKXXkVFCf+8NXClnurvL/wFPld2e0+o2F3hnJqV+nkCZTcMywMSh6y+y4g89/TeZ/ABLgeTLDg8J/AAAAAElFTkSuQmCC",
        },
        images: {
          fallback: {
            src: "/static/27f83f4be02311b43e60a024397bdbe8/f31ef/shuttle_128b03884d.png",
            srcSet:
              "/static/27f83f4be02311b43e60a024397bdbe8/ebf64/shuttle_128b03884d.png 10w,\n/static/27f83f4be02311b43e60a024397bdbe8/ca121/shuttle_128b03884d.png 20w,\n/static/27f83f4be02311b43e60a024397bdbe8/f31ef/shuttle_128b03884d.png 40w,\n/static/27f83f4be02311b43e60a024397bdbe8/1f8a1/shuttle_128b03884d.png 80w",
            sizes: "(min-width: 40px) 40px, 100vw",
          },
          sources: [],
        },
        width: 40,
        height: 40,
      },
    },
  },
};

describe("Test if the StoryCard component is working as expected", () => {
  it("<StoryCard /> matches snapshot", () => {
    const component = render(
      <StoryCard
        title={"2016"}
        description="We first drafted our approach to combine lean, agile & design thinking for a discovery phase."
        image={imgData}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<StoryCard /> renders without exploding", () => {
    const component = render(
      <StoryCard
        title={"2016"}
        description="We first drafted our approach to combine lean, agile & design thinking for a discovery phase."
        image={imgData}
      />
    );
    expect(component.getByTestId("story-card")).toBeInTheDocument();
  });
});
