import type { Meta, StoryObj } from "@storybook/react";
import { HeroBannerForTDI } from "./HeroBannerForTDI";
import techHero from "../../../static/images/tech-hero.png";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Banners",
  component: HeroBannerForTDI,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof HeroBannerForTDI>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HeroBannerForTDIComponent: Story = {
  args: {
    data: {
      title:
        "Technology, like art, is a soaring exercise of the human imagination",
      img: techHero,
      subtext: "Words by one of the greatest sociologists - Daniel Bell",
      description:
        "Technology is akin to language in the world of contributing ideas.It's a key arsenal for innovation.",
    },
  },
};
