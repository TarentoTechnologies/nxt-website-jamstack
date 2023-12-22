import type { Meta, StoryObj } from "@storybook/react";

import processLogo from "../../../static/images/discover-img.svg";
import { AcceleratorCard } from "./AcceleratorCard";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Cards",
  component: AcceleratorCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof AcceleratorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AcceleratorCardComponent: Story = {
  args: {
    title: "Anuvaad Translation",
    logoDarkSrc: "https://nxt.tarento.com/img/anuvad_dark_logo.svg",
    logoLightSrc: "https://nxt.tarento.com/img/anuvad_light_logo.svg",
    description: (
      <>
        AI Powered translation platform for <br />
        Indian languages. Used by Hon.
        <br />
        Supreme Court of India for Suvaas <br />
        project.{" "}
      </>
    ),
    bgImg: "https://nxt.tarento.com/img/translation.svg",
  },
};
