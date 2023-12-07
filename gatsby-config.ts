import * as dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.GATSBY_STRAPI_API_URL,
  accessToken: process.env.GATSBY_STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "design-portfolio",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "agency-portfolio",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
  ],
  singleTypes: [
    {
      singularName: "home",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "agency-portfolio-listing",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "design-portfolio-listing",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "technology",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "design",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "innovation",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "data-platform",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    }
  ],
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `nxt-website-jamstack`,
    siteUrl: `https://nxt.tarento.com/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `NXT Website`,
        short_name: `NXT Website`,
        start_url: `/`,
        icon: "static/images/android-chrome-192x192.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: strapiConfig,
    },
    "gatsby-transformer-remark",
  ],
};

export default config;
