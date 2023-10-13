import type { Meta, StoryObj } from "@storybook/react";
import { PortfolioCard } from "./PortfolioCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards/Portfolio",
  component: PortfolioCard,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PortfolioCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    imgSrc: "https://picsum.photos/seed/picsum/370/226",
    imgAlt: "Test image",
    tag: "Public Administration",
    title: "iGOT - Karmayogi​",
    description:
      "iGOT Karmayogi is an online solutioning platform, developed as an integral part of the Digital India stack for capacity building of all government employees.",
    ctaText: "Read More",
    ctaLink: "https://www.google.com",
  },
};
