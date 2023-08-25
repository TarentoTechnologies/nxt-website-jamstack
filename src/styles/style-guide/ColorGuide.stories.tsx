import type { Meta, StoryObj } from "@storybook/react";
import { ColorGuide } from "./ColorGuide";

const meta: Meta<typeof ColorGuide> = {
  component: ColorGuide,
};

export default meta;
type Story = StoryObj<typeof ColorGuide>;

export const Palette: Story = {
  render: () => <ColorGuide />,
};
