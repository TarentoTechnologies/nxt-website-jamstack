import type { Meta, StoryObj } from "@storybook/react";
import { DesignProcessCard } from "./DesignProcessCard";
import processLogo from "../../../static/images/discover-img.svg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards",
  component: DesignProcessCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof DesignProcessCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DesignProcessCardComponent: Story = {
  args: {
    title: "Discover",
    icon: processLogo,
  },
};
