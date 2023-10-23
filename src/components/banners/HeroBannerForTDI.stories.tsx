import type { Meta, StoryObj } from "@storybook/react";
import { HeroBannerForTDI } from "./HeroBannerForTDI";
import techHero from "../../../static/images/tech-hero.png";
import rainLogo from "../../../static/images/rain.svg";
import rainHero from "../../../static/images/ai-img.svg";

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
export const HeroBannerForTDIPage: Story = {
  args: {
    data: {
      title:
        "Technology, like art, is a soaring exercise of the human imagination",
      img: techHero,
      subText: "Words by one of the greatest sociologists - Daniel Bell",
      description:
        "Technology is akin to language in the world of contributing ideas.It's a key arsenal for innovation.",
    },
  },
};

export const HeroBannerForRainPage: Story = {
  args: {
    data: {
      title: "Realtime analytics and insights",
      img: rainHero,
      subText: "Supercharge your business with the power of Data.",
      description:
        "Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform.",
      withLogo: true,
      logo: rainLogo,
    },
  },
};
