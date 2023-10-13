import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryCTA } from "./SecondaryCTA";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Buttons",
  component: SecondaryCTA,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["large", "small"],
      required: false,
    },
    customClasses: {
      control: "text",
    },
  },
} satisfies Meta<typeof SecondaryCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SecondaryCTAComponent: Story = {
  args: {
    label: "Read more",
  },
};
