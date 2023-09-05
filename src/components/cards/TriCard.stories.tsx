import type { Meta, StoryObj } from "@storybook/react";
import { TriCard } from "./TriCard";
import techLogo from "../../../static/images/technology.svg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards",
  component: TriCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    bgColor: {
      control: "select",
      options: ["blue", "green", "violet"],
      required: true,
    },
  },
} satisfies Meta<typeof TriCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TriCardComponent: Story = {
  args: {
    title: "Technology",
    logo: techLogo,
    bgColor: "blue",
  },
};
