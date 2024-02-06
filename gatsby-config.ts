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
    },
    {
      singularName: "rain",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "thor",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "gov-tech",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "customer-experience-pack",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "pricing",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "footer-section",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "pulse",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "aurora",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "nxt-application",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
    {
      singularName: "lead-v2",
      pluginOptions: {
        i18n: {
          locale: "all", // Fetch all localizations
        },
      },
    },
  ],
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `NXT Tarento - Technology design and Innovation`,
    siteUrl: `${process.env.GATSBY_SITE_URL}`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  // flags: {
  //   DEV_SSR: true,
  // },
  plugins: [
    "gatsby-plugin-image",
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
      resolve: "gatsby-source-strapi",
      options: strapiConfig,
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/apps/"],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${process.env.GATSBY_SITE_URL}`,
        sitemap: `${process.env.GATSBY_SITE_URL}sitemap-0.xml`,
        policy: [{ userAgent: "*", allow: "/", disallow: "/apps/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-76613193-3"],
      },
    },
  ],
};

export default config;
