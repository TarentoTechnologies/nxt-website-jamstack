import type { Meta, StoryObj } from "@storybook/react";

import { BannerWithTag } from "./BannerWithTag";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Banners/BannerWithTag",
  component: BannerWithTag,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BannerWithTag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "The Design tools and Technology that we use to support CIBoost",
    tagsList: [
      {
        id: 0,
        Label: "Sketch",
      },
      {
        id: 1,
        Label: "Photoshop",
      },
      {
        id: 2,
        Label: "HTML",
      },
      {
        id: 3,
        Label: "React",
      },
      {
        id: 4,
        Label: "PHP",
      },
    ],
  },
};
