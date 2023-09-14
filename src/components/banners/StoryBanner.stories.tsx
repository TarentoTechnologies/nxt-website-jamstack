import type { Meta, StoryObj } from "@storybook/react";
import { StoryBanner } from "./StoryBanner";
import techImg from "../../../static/images/tech-solution.png";
import innoImg from "../../../static/images/innovation/map.svg";
import leadImg from "../../../static/images/innovation/lead.svg";
import leadBgImg from "../../../static/images/innovation/Bitmap.jpg";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "UI Components/Banners",
  component: StoryBanner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof StoryBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TechStoryBanner: Story = {
  args: {
    data: {
      variant: "tech",
      title: "Tech Solutions",
      subTitle: "",
      bgImg: {},
      image: techImg,
      subText: {
        LevelOneHeading: "Customer Experience Pack",
        LevelTwoHeading: "Empowering customer experience with data & Insights",
        LevelOneDesc:
          "Aurora customer experience platform brings in the best of data engineering, analytics and user experience design to enable a superior customer support experience.",
        LevelTwoDesc: "",
        LevelThreeDesc: "",
      },
      withCTA: true,
      CTAlabel: "Find out more",
      CTAlink: "mailto:hello@tarento.com;",
    },
  },
};

export const InnovationStoryBanner: Story = {
  args: {
    data: {
      variant: "innovation",
      title: "Innovation Story",
      subTitle: "",
      bgImg: {},
      image: innoImg,
      subText: {
        LevelOneHeading: "Analytics dashboard for India's covid response",
        LevelTwoHeading: "",
        LevelOneDesc:
          "During the initial stages of the pandemic, India faced an unprecedented challenge in covid management with its diverse and massive population. Tarento was tasked with enabling country leadership with data driven decision making capabilities in a very short span of time.",
        LevelTwoDesc:
          "NXT took up the challenge and deployed our technology accelerators, leveraged GIS data from ISRO and used data from Ministry of health and Ministry of education and created a realtime dashboard that showcases cases, recovery, and fatality data, Assets and trained resources data by location. Data was granular at district level and aggregated to state and country level. Access privileges were given by state and at country level. First version of the platform was developed and launched in 5 days.",
        LevelThreeDesc:
          "The platform enabled the government to view the data on a daily basis and by geography and formulate policy and mobilization decisions with ease. Visualizations from the platform were used for daily briefing for the Prime minister.",
      },
      withCTA: false,
      CTAlabel: "Find out more",
      CTAlink: "mailto:hello@tarento.com;",
    },
  },
};

export const LeadStoryBanner: Story = {
  args: {
    data: {
      variant: "lead",
      title: "LEAD Program",
      subTitle: "LEAN . AGILE . DESIGN THINKING",
      bgImg: leadBgImg,
      image: leadImg,
      subText: {
        LevelOneHeading: "",
        LevelTwoHeading: "",
        LevelOneDesc:
          "Design Thinking driven 'discovery & solutioning' program that helps businesses tackle complex problems and enables informed decision making in a short time.",
        LevelTwoDesc:
          "LEAD drives innovation by enabling cross functional thinking across 'business', 'technology' and 'design' using the best of 'Lean', 'Agile' and 'Design thinking'.",
        LevelThreeDesc: "",
      },
      withCTA: true,
      CTAlabel: "Find out more",
      CTAlink: "lead.html",
    },
  },
};
