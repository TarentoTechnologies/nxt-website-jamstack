import type { Meta, StoryObj } from "@storybook/react";
import { HeroBanner } from "./HeroBanner";
import mainLogo from "../../../static/images/logo-main.svg";
import headLogo from "../../../static/images/logo-head.svg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Banners",
  component: HeroBanner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const HeroBannerComponent: Story = {
  args: {
    logoMain: mainLogo,
    logoHead: headLogo,
  },
};
