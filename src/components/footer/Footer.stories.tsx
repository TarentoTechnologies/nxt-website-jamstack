import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import NXTlogo from "../../../static/images/logo-inner.svg";
import TarentoLogo from "../../../static/images/company-logo.svg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Footer",
  component: Footer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FooterComponent: Story = {
  args: {
    data: {
      nxtLogoImg: NXTlogo,
      nxtLogoImgTitle: "NXT-logo",
      companyLogoImg: TarentoLogo,
      companyLogoImgTitle: "Tarento-logo",
      description:
        "NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento. We take pride in being unconventional with our approaches while retaining the passion with which we work.",
      mailId: "hello@tarento.com",
      levelOneHeading: "Direct Links",
      levelOneList: [
        { title: "Home", href: "nxt.html" },
        { title: "Technology", href: "technology.html" },
        { title: "Design", href: "design-process.html" },
        { title: "Innovation", href: "nxt-innovation.html" },
        { title: "Pricing", href: "pricing.html" },
      ],
      levelTwoHeading: "Tech & Innovations",
      levelTwoList: [
        { title: "Bolt - Data Platform", href: "data-platform.html" },
        { title: "Rain - Analytics", href: "rain.html" },
        { title: "Thor - Chatbot", href: "thor.html" },
        { title: "GovTech", href: "govtech.html" },
        { title: "Customer Experience", href: "customer-experience.html" },
      ],
      levelThreeHeading: "Direct Links",
      levelThreeList: [
        { title: "Home", href: "https://www.tarento.com/" },
        { title: "About us", href: "https://www.tarento.com/about/" },
        { title: "Services", href: "https://www.tarento.com/services/" },
        { title: "Careers", href: "https://www.tarento.com/careers/" },
      ],
      levelFourHeading: "Programmes",
      levelFourList: [
        { title: "Lead", href: "https://www.tarento.com/lead/" },
        { title: "Blixt", href: "https://www.tarento.com/blixt/" },
      ],
      rightsText: "All rights reserved © 2023 Tarento Technologies.",
    },
  },
};
