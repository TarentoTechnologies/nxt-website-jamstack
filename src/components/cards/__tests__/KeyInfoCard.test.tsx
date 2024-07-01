import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

import { KeyInfoCard } from "../KeyInfoCard";

const cardData = [
  {
    id: "a4302b50-5631-515d-b7fb-9b9bcd55deb8",
    Title: "Challenge",
    Image: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: {
            layout: "constrained",
            placeholder: {
              fallback:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnklEQVR42gGTA2z8AL/F0N3g5dXY3ubn69TY3svR2MvQ2OLl6cPI0pSerqCotaKruKu0v7K5xLW7xr3Cy7/Ezb3Dy7q+yLm8xwDZ3eOZo7GnsL+xucWxuMOvt8KKlaXGy9K0vMiTna+ep7W3vsm5wMq5wMnT1t3U1dvM0NfN0djQ1NrV190A0tPXiJSiZ3OBdYGQj5yrwsjQoqq10tfd3+Dkp666k5yrr7K6qK23p665wsfPtLnDsrnEt7zHwMXO09XbANDQ04GJmFlDQlNQV5KZpMTEyZumtMTGzszDwLu4u09QVyspLImPmaSruLzCzIGEjJ6docDCyayyv7q6vwDAxMyCkaS8q621r7ijqLavsLaTnKmSm6mus7zm4+tnYGMAAARKUFmdpLGvtL9aXGW1rK61tbulsL7Av8YA09bdsKKi1MXDwrW4npSXsLS6jpWfgIeSlpmj/f//spiWYTw2lZeeho6aoKGngoWOy8rTmJKYt7zJzra2AN7k7caupdrNyKahpnRobsPIz6mvt5ieqJWXn+Xr+bqYkceilvj8/9XX38HEzKuttZqYnpWTlsGpnbOVhADuztuqi596cW52cniaoKrEw8empKasqrHTurbLp53Xt6j17+zu7/fw8vfe4efi5Ox/f4O/r53TwKbPxLUA1tTbtrjEm5OVlY2OkpWdnp6in56hm4R9oXlsx6iY++TV////9e/t4djc1tvl1NjgfH2DWFRUTkxPmpugAOTo8Obl6tLU2n1/hHBub9DFtu/fyu3dxuPUu8Ovm7CdltHT2sPCyIVzeIlrd8nDznZ5fz1CRlxCT49YaADm6vLq8PbJzNNnanK1q5/o1rzVxKzOu6Sij3x2a2Z3fIe5u8be4u+blqFpVFzIy9WBg4pGRkk4Mzuvm6kA5Onw6OzzzdLYYGNpVFVYd3V3cHBzTmN1RmN/DluTbKfS//z+8PL/y8rVioOKwMbQc3V7Pj9EKi4ytbe6AOLo7+Po7tbb41tfZzc6QHZ3flBpgQBZnQ5ytwBvuS6HxMjT5t7g68bJ1KestLm9xmpobFFRVUFES4iEigDh5u3g5uvb4OhobHQpKzBiYmZMYHYAOW8QLkwKToMAUZMlTnSJnLKtr7imq7StsbqanKObnqePlqKkp64A4+ju4+jt3+Pqf4KISElNY2RpbHF5K1mEM0tlNWOJIXCseoOKsrW7yc3XzM/ZztHaycvVvcHLusDKu8HKcgBLbWfKjJAAAAAASUVORK5CYII=",
            },
            images: {
              fallback: {
                src: "/static/8db79876759e2148da5b7180b91a92d0/1535a/about_copy_bcd2468822.png",
                srcSet:
                  "/static/8db79876759e2148da5b7180b91a92d0/c6d23/about_copy_bcd2468822.png 135w,\n/static/8db79876759e2148da5b7180b91a92d0/ba1a2/about_copy_bcd2468822.png 270w,\n/static/8db79876759e2148da5b7180b91a92d0/1535a/about_copy_bcd2468822.png 540w",
                sizes: "(min-width: 540px) 540px, 100vw",
              },
              sources: [],
            },
            width: 540,
            height: 400,
          },
        },
      },
    },
    DescriptionAlignment: "left",
    Description: {
      data: {
        childMarkdownRemark: {
          html: "<p>Innovation is now more important than ever in today's world. To stand out in a crowded market, business leaders need to focus on different ways they can keep up with evolving demand. Innovation is now more important than ever in today's world. To stand out in a crowded market, business leaders need to focus on different ways they can keep up with evolving demand. Innovation is now more important than ever in today's world.</p>\n<p>Innovation is now more important than ever in today's world. To stand out in a crowded market, business leaders need to focus on different ways they can keep up with evolving demand. Innovation is now more important than ever in today's world.</p>",
        },
      },
    },
  },
  {
    id: "4ebb7b8a-883c-526a-8ad9-0b1d20fdaef1",
    Title: "Our Approach",
    Image: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: {
            layout: "constrained",
            placeholder: {
              fallback:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACV0lEQVR42n2T208TQRSH928z4cWERH31QV+Um4VS8ALBaExLK/Wa+A/oiybEEEKgBZQE77FqChbBCA9ajHTbXdrupd2d6fw8My2ktIVJvuxcznyz5+yOdubsOXtl9Q3mFhJiPrmI+cUlLEiWlpFokJQsS14hQSRboHix+v4Dzl+4aGv9gUHIVmEcvsBRaN5rQo456mteEy7jyjE2cRPapZ5eIWV7BQP5/WKdYgn5fAH6zx/4nVnDr9Qn7G5uYG83i52VBHRdR6FYJkqKnGHC4zUMj4wK7XJvnzpVLuxbtqLkuLBsB5ZhoKznYOt7sPM5FOmw3M42rFIJJbdyGC/3SkcwNII2oVm2UPV9lUIN9VbxPLjVquqLxpznMxXbLBwcDnUWymAhBFzHAeccjA7wSSrnapwfKwwEh08Wli1626oU1d9MzkmOEw6FQienDMGbkjzaWoWM5kavXYfW09evBs1CnzH4XCC1Y+Dtlo7UdgHvtnJIpv/ideYfrdVUTMeUW4UGBTHOUK4w3H65gaGnaYw9XyfWEHyWxviL77BoTda2XRgkYf9AR6HcFJ3dJME6IjMZTBJSdms6A7vaWah+m96BK20pyxo6tGnu6y6mP/7B7JcsZlNZ1Z/5nIXrMaqh31bDkUYNa3RTBN0UQbekjlkUBXoyzxE13xXcdxSq77mCBCru4Cn3SsfVG+NcGwgE6l+NUuCNu8oatI6Po8oP7vIEtFNdXd8mY1PlO+GIQZiHRBoc9qNmOHbXjMbvmTEi/uCR+fDxEzM6FTfD0ZgRi9+3Tnd3p/8DFm0lEa5vFS8AAAAASUVORK5CYII=",
            },
            images: {
              fallback: {
                src: "/static/bda88a04e99f6b9359a4b23f3b57f83a/0c77b/Group_5_Copy_3a01b21432.png",
                srcSet:
                  "/static/bda88a04e99f6b9359a4b23f3b57f83a/48371/Group_5_Copy_3a01b21432.png 135w,\n/static/bda88a04e99f6b9359a4b23f3b57f83a/d56b7/Group_5_Copy_3a01b21432.png 270w,\n/static/bda88a04e99f6b9359a4b23f3b57f83a/0c77b/Group_5_Copy_3a01b21432.png 540w",
                sizes: "(min-width: 540px) 540px, 100vw",
              },
              sources: [],
            },
            width: 540,
            height: 417,
          },
        },
      },
    },
    DescriptionAlignment: "right",
    Description: {
      data: {
        childMarkdownRemark: {
          html: "<p>Innovation is now more important than ever in today's world. To stand out in a crowded market, business leaders need to focus on different ways they can keep up with evolving demand. Innovation is now more important than ever in today's world. To stand out in a crowded market, business leaders need to focus on different ways they can keep up with evolving demand. Innovation is now more important than ever in today's world.</p>\n<p>Innovation is now more important than ever in today's world. To stand out in a crowded market, business leaders need to focus on different ways they can keep up with evolving demand. Innovation is now more important than ever in today's world.</p>",
        },
      },
    },
  },
];

describe("Test if the KeyInfoCard component is working as expected", () => {
  it("<KeyInfoCard /> matches snapshot", () => {
    const component = render(<KeyInfoCard data={cardData} />);
    expect(component.container).toMatchSnapshot();
  });

  it("<KeyInfoCard /> renders without exploding", () => {
    const component = render(<KeyInfoCard data={cardData} />);
    expect(component.getByTestId("key-info-card")).toBeInTheDocument();
  });
});
