import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ColorGuide } from "../styles/style-guide/ColorGuide";
import { PrimaryCTA } from "../components/buttons/PrimaryCTA";

const IndexPage: React.FC<PageProps> = () => {
  return <main className="">
    {/* <PrimaryCTA label={"Read more"} variant="blue" /> */}
  </main>;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>::NXT Tarento - Technology design and Innovation::</title>
  </>
);