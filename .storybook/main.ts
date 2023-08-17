import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  webpackFinal: async (config: any) => {
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

    return config;
  },
};

export default config;
