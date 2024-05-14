import type { GatsbyNode } from "gatsby";
import path from "path";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  stage,
  loaders,
  actions,
  getConfig,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap/,
            use: loaders.null(),
          },
          {
            test: /aos/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  // Ignore mini css extract plugin CSS import order warnings
  // Safe to ignore here since we are using CSS modules in the project
  if (stage === "build-javascript" || stage === "develop") {
    const config = getConfig();

    const miniCss = config.plugins.find(
      (plugin: any) => plugin.constructor.name === "MiniCssExtractPlugin"
    );

    if (miniCss) {
      miniCss.options.ignoreOrder = true;
    }

    actions.replaceWebpackConfig(config);
  }
};

// Dynamic agency and design portfolio detail pages generation
// export const createPages = async function ({ actions, graphql }: any) {
//   const designPortfolioDetail = path.resolve(
//     `./src/templates/DesignPortfolioDetail.tsx`
//   );
//   const agencyPortfolioDetail = path.resolve(
//     `./src/templates/AgencyPortfolioDetail.tsx`
//   );

//   const { data } = await graphql(`
//     query PortfolioDetails {
//       allStrapiDesignPortfolio {
//         nodes {
//           Slug
//         }
//       }
//       allStrapiAgencyPortfolio {
//         nodes {
//           Slug
//         }
//       }
//     }
//   `);

//   // For design portfolio details
//   data.allStrapiDesignPortfolio.nodes.forEach((node: any) => {
//     const slug = node.Slug;
//     if (slug !== null) {
//       actions.createPage({
//         path: `/design-portfolio/${slug}`,
//         component: path.resolve(designPortfolioDetail),
//         context: { slug: slug },
//       });
//     }
//   });

//   // For agency portfolio details
//   data.allStrapiAgencyPortfolio.nodes.forEach((node: any) => {
//     const slug = node.Slug;
//     if (slug !== null) {
//       actions.createPage({
//         path: `/agency-portfolio/${slug}`,
//         component: path.resolve(agencyPortfolioDetail),
//         context: { slug: slug },
//       });
//     }
//   });
// };
