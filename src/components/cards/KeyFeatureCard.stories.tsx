import type { Meta, StoryObj } from "@storybook/react";
import { KeyFeatureCard } from "./KeyFeatureCard";
import keyLogo from "../../../static/images/tech-1.png";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards",
  component: KeyFeatureCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bgColor: {
      control: "select",
      options: ["green", "red", "orange", "blue", "italianBlue", "violet"],
      required: true,
    },
  },
} satisfies Meta<typeof KeyFeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const KeyFeatureCardComponent: Story = {
  args: {
    title: "Built for scale",
    logo: keyLogo,
    bgColor: "green",
  },
};
