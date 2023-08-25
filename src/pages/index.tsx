import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ColorGuide } from "../styles/style-guide/ColorGuide";

const IndexPage: React.FC<PageProps> = () => {
  return <main className=""></main>;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>::NXT Tarento - Technology design and Innovation::</title>
  </>
);
