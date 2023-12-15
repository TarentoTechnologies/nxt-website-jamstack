import type { Meta, StoryObj } from "@storybook/react";

import techLogo from "../../../static/images/technology.svg";
import { PricingCard } from "./PricingCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards",
  component: PricingCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PricingCardComponent: Story = {
  args: {
    title: "RAIN",
    logo: "https://nxt.tarento.com/img/rain_with_circle.svg",
    description: "Real time analytics and insights from your business data.",
    basePrice: "€25K",
    supportPrice: "€3000 per year",
    supportText: "Support",
    supportSubText: "(Optional)",
    baseList: ["Full perpetual license", "100 hours for implementation"],
    supportList: ["Security fixes", "  Bug fixes", "OS compatibility"],
  },
};
