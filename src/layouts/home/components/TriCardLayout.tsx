import { TriCard } from "../../../components/cards/TriCard";

interface TriCardLayoutProps {
  data: any[];
}

export const TriCardLayout = ({ data }: TriCardLayoutProps) => {
  return (
    <div className={`container-fluid`}>
      <div className={`row`}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`col-sm-12 col-md-12 col-lg-4 px-0`}
          >
            <TriCard
              title={item.title}
              logo={item.logo}
              bgColor={item.bgColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
