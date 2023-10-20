import type { Meta, StoryObj } from "@storybook/react";

import boltLogo from "../../../static/images/bolt_dark.svg";
import { CustomerExpCard } from "./CustomerExpCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards",
  component: CustomerExpCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CustomerExpCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CustomerExpCardComponent: Story = {
  args: {
    title: "Intuitive Experience",
    description:
      "Make the experience as intuitive as possible. Avoid chances for errors, confusion. Ensure that your users have sufficient self help materials when they want to know more. Capture telemetry to understand user behaviour anonymously.",
    logo: "https://nxt.tarento.com/img/experience.svg",
    isLink: false,
    // isSecondary: true,
  },
};
