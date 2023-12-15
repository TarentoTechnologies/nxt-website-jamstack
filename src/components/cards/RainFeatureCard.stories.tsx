import type { Meta, StoryObj } from "@storybook/react";

import featureImg from "../../../static/images/features 1.jpg";
import { RainFeatureCard } from "./RainFeatureCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards",
  component: RainFeatureCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof RainFeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const RainFeatureCardComponent: Story = {
  args: {
    heading: "Create your own dashboards with your favourite visualization",
    subText:
      "Visualizations ranging from a simple bar chart to map visualizations. User has the freedom to create multiple dashboards with different collections of visulizations.",
    img: featureImg,
  },
};
