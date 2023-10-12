import type { Meta, StoryObj } from "@storybook/react";
import { HeroBannerForAccelerators } from "./HeroBannerForAccelerators";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Banners",
  component: HeroBannerForAccelerators,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof HeroBannerForAccelerators>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HeroBannerForAcceleratorsComponent: Story = {
  args: {
    data: {
      title: "Data. Information. Insight.",
      img: "https://nxt.tarento.com/img/data-platform.jpg",
      logosrc: "https://nxt.tarento.com/img/bolt_light.svg",
      subText: "Supercharge your business with the power of Data.",
      description:
        "Modern businesses are run on information & knowledge. To improve your bottom line and expand your business, you need to have the right information available on time. Fundamentals of good data management is of paramount importance. Make reliable, data driven decisions. Take your business to the next level with our data-platform.",
    },
  },
};
