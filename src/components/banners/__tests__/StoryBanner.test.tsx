import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { StoryBanner } from "../StoryBanner";

const data = {
  SolutionTitle: "Tech Solutions",
  SolutionCard: {
    CTALink: "hello@tarento.com",
    CTAText: "Find out more",
    Description: {
      data: {
        childMarkdownRemark: {
          html: "<p><strong>Empowering customer experience with data &#x26; Insights</strong></p>\n<p>Aurora customer experience platform brings in the best of data engineering, analytics and user experience design to enable a superior customer support experience.</p>",
        },
      },
    },
    Image: {
      id: "68965cf5-4362-522b-88cb-cfe574af79f2",
      localFile: {
        childImageSharp: {
          gatsbyImageData: {
            height: 858,
            images: {
              fallback: {
                sizes: "(min-width: 934px) 934px, 100vw",
                src: "/static/4af750352a6c177c7f80d9ed351d244d/6998c/tech_solution_d8d031719f.png",
                srcSet:
                  "/static/4af750352a6c177c7f80d9ed351d244d/fd487/tech_solution_d8d031719f.png 234w,\n/static/4af750352a6c177c7f80d9ed351d244d/a2a8c/tech_solution_d8d031719f.png 467w,\n/static/4af750352a6c177c7f80d9ed351d244d/6998c/tech_solution_d8d031719f.png 934w",
              },
              layout: "constrained",
              placeholder: {
                fallback:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEZUlEQVR42oWUe0xTVxzHK8ZZE83UMRhKtCD0cdvbJ31Q2t4WsVAy3EMv1g7C4qPogFIeRdSx+gjQFstDh5MQh3HL5irLCPFBVKpsC9syt0SXZTHZsmXJ3B9bSEyWbJH2fndui8SMP3aSb36/e3LP53y/J/dcgWBhsAJ2OV/N8ojTogjft9DhKasy/K5FGQpa6cjrJao+u4XqpsyS8AaTKbqKf9c7ghVtZ5HVEPhLu6fpN+eehodFgkUgG0sBGXpgt0NzBox6MGnXDMKuHiA9r35Y6Mg82eh3izJy36oI3WLUp8bLmYsz21+87ovFsFzw9GDZtEMbHXJZVWFYlT2PzfKe+RJeit55izKlpFUVgk3VBxvZwKaKJvjNzPLeoZRj790Vi0D+YWwMwhLloMWh+BAOVQxV2yfhckxgq+YyHHQMDkWMc9AfJ+2K0UQp1ZtwUn2Py2VRbBdHv6vOj7pToKAgmMHXV5gxU6khVG9RDCutsnHY5ddRYbuGSsc1lBVNYlvRFTI3AUY+CfuWMZRmHYcju4fbI/NzL+X1/b0152xfGhhMA9mykWdJyWCMX4jKVee5KvUIWfwR3OpemMUXYFddAkN/ACt1CfrcM1CsPARbVivHPOeHWtg1pxD2tC7GhQDL+Nq4+7a0tupGWyl1+p8KahBm2XucYcsIigtHYcg/R/QOisWjMOWeArXiMFyiZo5eFYBuTWiuXHTRl4JVVl7Z3N32o+J48wNjV+M9V43r6g5T4YVHduU4rLJRTrspCn3+aehE/dDnDaNE8j50L/SjLMeLHQU1nG71URRnDv9hzjy3KwV0Oi+bQ20P3CdbfzgSDvz02jblxSy9aOhX7aYI6I0nOFVuN5Qbu0l/EkWiQVill6DNjsC4tgOOnBbo1xxOuvImHro1sxWLkZ+co5e9afG+OnWCyg78Is5shyy7g5NktYPeECBKPYPK6YB8XQckgkPQP/8mVKvbEzLBkT9VK0860+cHwbJgEBksm/4w9748ZSjTvT1nEndDK+riDAVDMOSFSexuAjyKgswmyAhQu5bM5fZCuT6QVGd3QlfQNsswdcIlN6XRM1vmq/0KB3bFuX07bmD/zhl4XNfhdl5FhWEMxZIIdPnHyIc/AL30MHQSX9JId5C+/XtTbvpKLsRGKvZBNs7Us3ECugUvO010i4cTTeOg+w6ZvwmLqguawgYUSVtQJPEnDdIA6f33mc1B4RIgf44Hds2gvjqeAj6pT8S7tqrfglbcTCCt0ElbEgYqDSwoaFq5FOiOG3kIUcLLxpML/aL2E8dpoC8NlPjnDbIA9LK2exQVfGYJ0Of5Uuev/RbNNXfxxu7PSdTbSIOn58lRJBeAnFbclCBAzkB1JooVXXz8T8nyZU/9b9K35aDnyjoSrYss/oTUn73V8WSDZxa+mq/BV96lTXOMOOJdtSZJ1M90spa9Jiq4XvB/o67uttDruUPXs9P7yQYjRN/s23njMXH4SF3YeN4o6zT+x5XgX7vwMW0BNcjuAAAAAElFTkSuQmCC",
              },
              width: 934,
            },
          },
        },
      },
    },
  },
  withCTA: true,
  variant: "tech",
  isImage: true,
};

describe("Test if the StoryBanner component is working as expected", () => {
  it("<StoryBanner /> matches snapshot", () => {
    const component = render(
      <StoryBanner
        primaryTitle={data.SolutionTitle}
        cardData={data.SolutionCard}
        withCTA={data.withCTA}
        variant={data.variant}
        isImage={data.isImage}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<StoryBanner /> renders without exploding", () => {
    const component = render(
      <StoryBanner
        primaryTitle={data.SolutionTitle}
        cardData={data.SolutionCard}
        withCTA={data.withCTA}
        variant={data.variant}
        isImage={data.isImage}
      />
    );
    expect(component.getByTestId("story-banner")).toBeInTheDocument();
  });
});
