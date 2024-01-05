import React, { FC } from "react";

const gatsby: any = jest.requireActual("gatsby");

interface GatsbyProps {
  // add types for gatsby props here
}

const Gatsby: FC<GatsbyProps> = {
  ...gatsby,
  Link: jest
    .fn()
    .mockImplementation(
      ({
        activeClassName,
        activeStyle,
        getProps,
        innerRef,
        partiallyActive,
        ref,
        replace,
        to,
        ...rest
      }) =>
        React.createElement("a", {
          ...rest,
          href: to,
        })
    ),
  StaticQuery: jest.fn(),
  graphql: jest.fn(),
  useStaticQuery: jest.fn(),
};

export default Gatsby;
