import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryTitle } from "./PrimaryTitle";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Titles",
  component: PrimaryTitle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: ["banner", "infoSection", "card"],
      required: false,
    },
    color: {
      control: "select",
      options: ["white", "black"],
      required: false,
    },
  },
} satisfies Meta<typeof PrimaryTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryTitleComponent: Story = {
  args: {
    title: "Our Technologies",
  },
};
