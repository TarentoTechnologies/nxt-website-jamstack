import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { ArtefactCard } from "../ArtefactCard";

const imgData = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        placeholder: {
          fallback:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmklEQVR42r1VTU8TURQdcKsb48KNC79SQ9XptGgiqfSLlo1R0VRjUMBEE40h0UREE2MNxKCICRBQq0XsdEr5aElp3EhgYTASgRDFxAQ26k7/ArQ93jtD26EtwYU6ye28uXPOefee9+ZVELIXSrxebOKRrWx4s12Uax1iKGoXQz8cJjnJoY7VnFzLGMZqHJQIeRclfKU8cJhC54j43W2JwW2Jpp3SACinBo85x+8Yw1iNrnLXivoElDpEuddjGUWVeSidEVkvGMNY5jBX0LfKv3ZR6faUxwkQWrGbQqmNBFUMYZnDXL0WtRmu4zZothXyasPqckFY4qhc0lDFKgyBLeTNokuK0KxyKucXtWVRioZTUnSVyinmsgZrCS7TQD0ZTWXnxBwkVnlARvmuvqJhNQbVCbOixGUN1hKcpsGYm8ylZDIjZjso45h1EL6b79B6ewotzVNobV690/OZ6hgq9+dEmcsarCU4pfA3bWto3rmopUO7+9D54CPexJbQdvc9Olqm0X5/Go/ufcCQ/BVB/4KKYWzGS9ZgLVoQZVlvtNOs4IihH01XJ1B3cgzG7X6crR6F1xPF3q29OH88jtfPP+PwnldwmZW8RVKWCwWpDfbo4ukEEtElxIcXsTD/C5/mfsJaFkRjw1vIVOG6gvkt8wpW7OvH9UvjaoXijpeor0mg4VQChm3P1FywoEJ9y1JkpEpb5aTew662GYQDX3Dj8jjuNE7i1rVJNF2ZgL9zHvILqlDnIXNZg7UKto1zdcvUOEbQ/XAGPR2z6Hk8i6d8b6f7kzlcODGGo8Y1q5zbNsU2dkbUsjNQNNjLrFj+xl7v0/uzL6XIp/dPDofMg00MdqleSJE0G60tlP6wkLN5xjCWOf/ngP1bfwG/AYMg3asXpBRIAAAAAElFTkSuQmCC",
        },
        images: {
          fallback: {
            src: "/static/02a976acb55429127975095ec5ea926f/3fd26/feature_Img_01_f296b86174.png",
            srcSet:
              "/static/02a976acb55429127975095ec5ea926f/12411/feature_Img_01_f296b86174.png 99w,\n/static/02a976acb55429127975095ec5ea926f/0b232/feature_Img_01_f296b86174.png 198w,\n/static/02a976acb55429127975095ec5ea926f/3fd26/feature_Img_01_f296b86174.png 396w",
            sizes: "(min-width: 396px) 396px, 100vw",
          },
          sources: [],
        },
        width: 396,
        height: 396,
      },
    },
  },
};

describe("Test if the ArtefactCard component is working as expected", () => {
  it("<ArtefactCard /> matches snapshot", () => {
    const component = render(
      <ArtefactCard image={imgData} title="Test title" />
    );
    expect(component.container).toMatchSnapshot();
  });

  it("<ArtefactCard /> renders without exploding", () => {
    const component = render(
      <ArtefactCard image={imgData} title="Test title" />
    );
    expect(component.getByTestId("artefact-card")).toBeInTheDocument();
  });
});
