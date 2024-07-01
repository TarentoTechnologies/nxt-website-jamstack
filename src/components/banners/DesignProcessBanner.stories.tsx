import type { Meta, StoryObj } from "@storybook/react";

import discoverImg from "../../../static/images/discover.png";
import { DesignProcessBanner } from "./DesignProcessBanner";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Banners",
  component: DesignProcessBanner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof DesignProcessBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DesignProcessBannerComponent: Story = {
  args: {
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
  },
};
