import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { KeyFeatureCard } from "../KeyFeatureCard";

const imgData = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        placeholder: {
          fallback:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACcklEQVR42rWV7UuTURjG958EUYRYWzr3PrfS5nTZdOhAMrFXIuhLIASVGKvcdHu26dame3FOl9tKxGKZ0tSWNZe1GQUSEfRB+ti/sKtzzhBEtrXKHrg5h4fn/O7rvq9zzsMTc0qjxK78KXUoIbUr8yTwh5GnaymDsnjSEdUPuVsFKfdXsEKQtYxBWDxCz/8TbBeUsnilPhDZZBBzchYirjCn71hwhbHYuqJAiV0BzcNmNLib2Njo1rJoGTsD3bgeWu9paD06yOz1lQHrbFKkvq1hYMEE92sPuBUHzC+H4V+fQCgTxmjKhex2jiRrYUp3g0uW7Fkbg95nYHOFU42TLg0sBOp9M46LM1dYoiaicm/pJUuOZmMwhrpQMyyC3KGCYKgOvrcB0Mf5yoXwxhR0pAW0mt8qpIBr8etMgcxRj+ME2jN9Hs8+J+BLB3B/yYzeyCWmmppVUiHNJOEUOGapxfynpzAEO3HQdIQo0SP9fZ1ALxClQmbQ4tYSmr2t5RXSbOrRRoTfTWP24xymNiKIZeOwJK1o9bVDaJOwfiqdJzCRmcQpsgMKphRRSLMIrRK2MPllGd3hXnRNdsO0+ACPPkRx4O4h1seqQT7razATgsZTxmX6stYqRpu/A7FcHHxSdvWgAGfDPfCng7gx14ehpA321RHcStzBwtaLyoGPN2eZEbSX54gZtLzL0au4nehH//MB9M3fhG3FDtVIQ2lTKJA2mJ6A3PYm4rkniLyfwerXFOvl4XtVzJCj5hrwyVhtFjADKzop1D1DwIj2QCfaAh3MqJ3tRINuJYVDXflZpn2hBu3E3rLKxX+4vvb7gt3vX8AvdXpaCCj9EUYAAAAASUVORK5CYII=",
        },
        images: {
          fallback: {
            src: "/static/285b5b87d3c327c3ce8d379e9c86f131/a8b52/tech_1_52cd05fc87.png",
            srcSet:
              "/static/285b5b87d3c327c3ce8d379e9c86f131/53973/tech_1_52cd05fc87.png 30w,\n/static/285b5b87d3c327c3ce8d379e9c86f131/7ab40/tech_1_52cd05fc87.png 60w,\n/static/285b5b87d3c327c3ce8d379e9c86f131/a8b52/tech_1_52cd05fc87.png 120w",
            sizes: "(min-width: 120px) 120px, 100vw",
          },
          sources: [],
        },
        width: 120,
        height: 120,
      },
    },
  },
  alternativeText: "Built for scale",
  caption: "Built for scale",
  id: "bfd0e978-24b6-57dd-a4e1-1c51d229a602",
};

describe("Test if the KeyFeatureCard component is working as expected", () => {
  it("<KeyFeatureCard /> matches snapshot", () => {
    const component = render(
      <KeyFeatureCard
        title={"Built for scale"}
        logo={imgData}
        bgColor={"green"}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<KeyFeatureCard /> renders without exploding", () => {
    const component = render(
      <KeyFeatureCard
        title={"Built for scale"}
        logo={imgData}
        bgColor={"green"}
      />
    );
    expect(component.getByTestId("key-feature-card")).toBeInTheDocument();
  });
});
