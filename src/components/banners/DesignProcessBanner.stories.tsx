import type { Meta, StoryObj } from "@storybook/react";
import { DesignProcessBanner } from "./DesignProcessBanner";
import discoverImg from "../../../static/images/discover.png";

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
    levelOneDesc:
      "In the discovery stage, we work closely with the client to define our understanding of the problem.",
    subHeading: "Primary and Secondary Research",
    levelTwoDesc:
      "To diverge and understand more about the problem area, we conduct user research and secondary research from any source available. We create personas to identify our users, map user journeys to find the pain points.",
    img: discoverImg,
    bgGray: true,
  },
};
