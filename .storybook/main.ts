import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import React from "react";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  core: {},
  webpackFinal: async (config: any) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[2].exclude = [
      /node_modules\/(?!(gatsby|gatsby-script)\/)/,
    ];

    // Remove core-js to prevent issues with Storybook
    config.module.rules[2].exclude = [/core-js/];
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[2].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    );

    // Prevent webpack from using Storybook CSS rules to process CSS modules
    config.module.rules.find(
      (rule) => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.module\.css$/;

    // Tell webpack what to do with CSS modules
    config.module?.rules?.push({
      test: /\.module\.css$/,
      use: [
        {
          loader: "style-loader",
          options: {
            modules: {
              namedExport: true,
            },
          },
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              namedExport: true,
              localIdentName: "[name]--[local]--[hash:base64:5]",
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../src"),
    });

    config.resolve.mainFields = ["browser", "module", "main"];
    return config;
  },
};

export default config;
