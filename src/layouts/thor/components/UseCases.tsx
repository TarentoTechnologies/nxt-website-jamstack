import { useCasesSubTitle } from "../Thor.module.css";
interface CaseStudiesProps {
  data: {
    title?: string;
    list?: { title: string; imgSrc: string; description: string }[];
  };
}

export const UseCases = ({ data }: CaseStudiesProps) => {
  return (
    <div className="layout">
      <div className={`container-fluid d-flex justify-content-center`}>
        <div className={`containerService paddingLeftRight15`}>
          <div className="">
            <h1 className="pb-5">Use cases</h1>
            <div className="row layoutDetails d-feature useCases">
              <div
                className={`col-md-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
              >
                <div className="pull-left wow fadeInUp  animated">
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
              <div
                className={`col-md-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
              >
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="https://nxt.tarento.com/img/FAQs.svg"
                    alt="Frequently asking questions"
                    title="Frequently asking questions"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <div className={useCasesSubTitle}>FAQs</div>
                </div>
              </div>{" "}
              <div
                className={`col-md-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
              >
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="https://nxt.tarento.com/img/FAQs.svg"
                    alt="Frequently asking questions"
                    title="Frequently asking questions"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <div className={useCasesSubTitle}>FAQs</div>
                </div>
              </div>{" "}
              <div
                className={`col-md-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
              >
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="https://nxt.tarento.com/img/FAQs.svg"
                    alt="Frequently asking questions"
                    title="Frequently asking questions"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <div className={useCasesSubTitle}>FAQs</div>
                </div>
              </div>{" "}
              <div
                className={`col-md-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
              >
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="https://nxt.tarento.com/img/FAQs.svg"
                    alt="Frequently asking questions"
                    title="Frequently asking questions"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <div className={useCasesSubTitle}>FAQs</div>
                </div>
              </div>{" "}
              <div
                className={`col-md-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
              >
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="https://nxt.tarento.com/img/FAQs.svg"
                    alt="Frequently asking questions"
                    title="Frequently asking questions"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <div className={useCasesSubTitle}>FAQs</div>
                </div>
              </div>{" "}
              <div
                className={`col-md-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
              >
                <div className="pull-left wow fadeInUp  animated">
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
              <div
                className={`col-md-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
              >
                <div className="pull-left wow fadeInUp  animated">
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
              <div
                className={`col-md-4 mb-5 col-sm-6 col-xs-12 d-flex align-items-center`}
              >
                <div className="pull-left wow fadeInUp  animated">
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
              {/* <div className="col-md-4 mb-5 col-sm-6 col-xs-12 spaceThree">
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="img/Customer Support.svg"
                    alt="Customer support"
                    title="Customer support"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <h2>Customer Support</h2>
                </div>
              </div>
              <div className="col-md-4 mb-5 col-sm-6 col-xs-12 spaceThree">
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="img/recomendations.svg"
                    alt="AI Recommendations"
                    title="AI Recommendations"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <h2>Recommendations</h2>
                </div>
              </div>
              <div className="col-md-4 mb-5 col-sm-6 col-xs-12 spaceThree">
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="img/Marketing.svg"
                    alt="Marketing"
                    title="Marketing"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <h2>Marketing</h2>
                </div>
              </div>
              <div className="col-md-4 mb-5 col-sm-6 col-xs-12 spaceThree">
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="img/Reservations.svg"
                    alt="Reservations"
                    title="Reservations"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <h2>Reservations</h2>
                </div>
              </div>
              <div className="col-md-4 mb-5 col-sm-6 col-xs-12 spaceThree">
                <div className="pull-left wow fadeInUp  animated">
                  <img src="img/helpdesk.svg" alt="Helpdesk" title="Helpdesk" />
                </div>
                <div className="wow fadeInUp  animated">
                  <h2>Help desk</h2>
                </div>
              </div>
              <div className="col-md-4 mb-5 col-sm-6 col-xs-12 spaceThree">
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="img/Guided Selling.svg"
                    alt="Guided Selling"
                    title="Guided Selling"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <h2>Guided Selling</h2>
                </div>
              </div>
              <div className="col-md-4 mb-5 col-sm-6 col-xs-12 spaceThree">
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="img/HR Support.svg"
                    alt="HR Support"
                    title="HR Support"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <h2>HR Support</h2>
                </div>
              </div>
              <div className="col-md-4 mb-5 col-sm-6 col-xs-12 spaceThree">
                <div className="pull-left wow fadeInUp  animated">
                  <img
                    src="img/Event Booking.svg"
                    alt="Event Booking"
                    title="Event Booking"
                  />
                </div>
                <div className="wow fadeInUp  animated">
                  <h2>Event Booking</h2>
                </div>
              </div>
              <div className="col-md-4 mb-5 col-sm-6 col-xs-12 spaceThree">
                <div className="pull-left wow fadeInUp  animated">
                  <p>And many more..</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
