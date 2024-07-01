import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { DashboardCard } from "../DashboardCard";

const imgData = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        placeholder: {
          fallback:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVElEQVR42o1V229MQRw+5akRBOkrCXFpUZRSlXiQtAlpCJE0jVulIfEHEJ5F3OKBukXE7QGNjQjxzkuDaLtF6xLt2XP20na7drslQXfmfH7fnHNY1GWS2Z2dne833/x+33xjWUEDUCJ9Isd9fZgai6ltrqMirqNd+VbSPddVtvyOxB3sdF2UBriJxFq/tnDScdSuuKsHR/NAfgTe4AAQdz3pGhxz7mOec6o/4ajGYmzYSgJ2JXZ/oVUASA/BE0Y6ZMZg7IalP6eH0/ByWcC29RlY+B6D0Sf4zPS5L5/NzmNOTKkwyJ+6EysoriWG2ICpiWW5tmribrJASTBPdkcuB3zIANkP/nfxmGu5hmsTcV0YyTGoajbBolFMGkjpd3JMyJE1Aedah7BkURdqV71A9bJurFrRjZrqbqys6jZzi8u7cPb0EDLDQMwuaOZWYiR6ezHDSiSwm3njMWU3c5yK+R04uN9B5cIuNO94j00Nr7G+vhd7WvrMRgcPOFgwrwNxR4MYYskylcJ2K5nQEf6QnRSPdO/uCMrndYKVJJvHj0Zx5HAShyTIs6efsLb2JaiAReWdaLuVNWkgljGSSX3HkorFSFmO65HppQtpLBUWDx/kMWVyO65cHkbDhl7U1/XgxrUMJpW24/69PFYsjZpjE0MsY0isuBXKwg3o27bCwvmdKJv+FFs3v8WcWc+xpuYl6tb1YPbM59iy8Q3Kpj1B+dwOCaQMhli/+kpZ/PghBWUqWL0silMnBzD2Feh59ZULkUpqGY+BMmHRVkuReFxiinVKhvGArsedhqVyVZVRXDyfDgA+AwI5zogKrl/NoLoqaqTD/4gNYsQsJpIJ9W+ANlJYviRq8sWWy3qmCOwcs0XasqgRKf0IGBRFCmyx1GFAMqAOKY2W3e9NFS9fSpvCsHN8+2YW+/aKfERS3DxgqFgcStCiGClKUo7Zckdl0YljKQOgkCns4s65yoouHD+aMumhsHkpeDl4SazAYZrJUhJbYD64M/P3t86T+ApRyjcJ1WQVX+ifzaHwH+agxjeH0HZoQbSi4OL/075ocYGoW79b13gGm3DQKOD+jz8ZrDYmGxrsqDFYPUgzHs9gf3sCaO/G5sXufdsPmZnnIMLngc/EeE/AN37w0Ej7/leXAAAAAElFTkSuQmCC",
        },
        images: {
          fallback: {
            src: "/static/f9e009176138934da4f317f3db96c6ee/e9fba/Group_11_0e80584bfd.png",
            srcSet:
              "/static/f9e009176138934da4f317f3db96c6ee/86ee2/Group_11_0e80584bfd.png 13w,\n/static/f9e009176138934da4f317f3db96c6ee/88208/Group_11_0e80584bfd.png 25w,\n/static/f9e009176138934da4f317f3db96c6ee/e9fba/Group_11_0e80584bfd.png 50w",
            sizes: "(min-width: 50px) 50px, 100vw",
          },
          sources: [],
        },
        width: 50,
        height: 50,
      },
    },
  },
  alternativeText: "Retail",
};

describe("Test if the DashboardCard component is working as expected", () => {
  it("<DashboardCard /> matches snapshot", () => {
    const component = render(
      <DashboardCard
        title={"Retail"}
        description={
          "Effortlessly monitor retail performance with our interactive dashboard cards on your website."
        }
        imgSrc={imgData}
        ctaLabel={"Explore"}
        ctaLink={"/rain/demo"}
        isCTAExternal={true}
      />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<DashboardCard /> renders without exploding", () => {
    const component = render(
      <DashboardCard
        title={"Retail"}
        description={
          "Effortlessly monitor retail performance with our interactive dashboard cards on your website."
        }
        imgSrc={imgData}
        ctaLabel={"Explore"}
        ctaLink={"/rain/demo"}
        isCTAExternal={true}
      />
    );
    expect(component.getByTestId("dashboard-card")).toBeInTheDocument();
  });
});
