import { Link } from "gatsby";

import { TriCard } from "../../../components/cards/TriCard";

interface TriCardLayoutProps {
  data: any[];
}

export const TriCardLayout = ({ data }: TriCardLayoutProps) => {

  return (
    <div className={`container-fluid`}>
      <div className={`row`}>
        {data.map((item: any, index: number) => (
          <div key={item.id} className={`col-sm-12 col-md-12 col-lg-4 px-0`}>
            <Link to={item.CTALink}>
              <TriCard
                title={item.Title}
                logo={item.Icon?.localFile?.url}
                bgColor={item.BackgroundColor}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
