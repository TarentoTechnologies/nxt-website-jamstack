import type { Meta, StoryObj } from "@storybook/react";

import { KeyInfoCard } from "./KeyInfoCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards",
  component: KeyInfoCard,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof KeyInfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryKeyInfoCard: Story = {};
