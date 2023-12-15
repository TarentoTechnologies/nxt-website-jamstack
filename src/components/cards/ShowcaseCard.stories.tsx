import type { Meta, StoryObj } from "@storybook/react";
import { ShowcaseCard } from "./ShowcaseCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards/ShowcaseCard",
  component: ShowcaseCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ShowcaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    imgSrc: "https://picsum.photos/seed/picsum/570/345",
    imgAlt: "iGOT - Karmayogi​",
    title: "iGOT - Karmayogi​",
    description:
      "iGOT Karmayogi is an online solutioning platform, developed as an integral part of the Digital India stack for capacity building of all government employees. It will provide anytime-anywhere-any device learning to train about 30 million users which was hitherto not achievable through traditional measures.​",
    ctaText: "Read More",
    ctaLink: "https://www.google.com",
  },
};
