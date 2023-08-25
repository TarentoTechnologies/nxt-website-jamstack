import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";
import boltImg from "../../../static/images/bolt_thumb.svg";
import boltLogo from "../../../static/images/bolt_dark.svg";
import boltLogoSecondary from "../../../static/images/tech_bolt_dark.svg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards",
  component: ProductCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ProductCardComponent: Story = {
  args: {
    title: "BOLT - Data platform",
    bgImg: boltImg,
    logo: boltLogo,
    secLogo: boltLogoSecondary,
  },
};
