import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryCTACard } from "./PrimaryCTACard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards",
  component: PrimaryCTACard,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PrimaryCTACard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryCTACardComponent: Story = {
  args: {
    title: "Are You Interested?",
    description:
      "  Innovation is now more important than ever in Today’s world. To stand out ina crowded market, business leaders need to focus. on different ways they can keep up with evolving demand.",
    ctaLink: "https://www.google.com",
    ctaText: "Contact Us",
  },
};
