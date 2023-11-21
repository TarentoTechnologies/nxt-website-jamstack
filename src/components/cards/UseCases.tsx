import { useCasesSubTitle } from "./UseCases.module.css";

interface UseCasesProps {
  title: string;
  imgSrc: string;
}

export const UseCases = ({ title, imgSrc }: UseCasesProps) => {
  return (
    <div className="layoutDetails d-feature useCases">
      <div className={`col-md-4 col-sm-6 col-xs-12 d-flex align-items-center`}>
        <div className=" wow fadeInUp  animated">
          <img
            src="https://nxt.tarento.com/img/FAQs.svg"
            alt="Frequently asking questions"
            title="Frequently asking questions"
          />
        </div>
        <div className="wow fadeInUp  animated">
          <div className={useCasesSubTitle}>FAQs</div>
        </div>
      </div>
    </div>
  );
};
