import { Link } from "gatsby";
import React from "react";

import { breadCrumbLabel } from "../../styles/style-guide/Typography.module.css";
import { breadcrumbStyles } from "./BreadCrumb.module.css";

interface BreadcrumbItem {
  label: any;
  url?: any;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const BreadCrumb = ({ items }: BreadcrumbsProps) => {
  return (
    <div className={`${breadcrumbStyles} ${breadCrumbLabel}`}>
      {items?.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && <span>|</span>}
          {item.url ? (
            <Link to={item.url}>{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
