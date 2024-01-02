import { HeadFC, PageProps } from "gatsby";
import * as React from "react";

import { NotFound } from "../layouts/404/404NotFound";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NotFound />
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
