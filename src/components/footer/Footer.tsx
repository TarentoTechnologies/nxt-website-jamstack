import {
  footer,
  footerRight,
  directlink,
  nxtLogo,
  tarentoLogo,
  marginBtm,
  marginBtm1,
  topBar,
  footerDesc,
  footerHeading,
  footerEmail,
  rights,
  dlinkLeft,
  dlinkRight,
} from "./Footer.module.css";

interface FooterProps {
  data?: any;
  nxtLogoImg?: any;
  companyLogoImg?: any;
}

export const Footer = ({ data, nxtLogoImg, companyLogoImg }: FooterProps) => {
  return (
    <div className={`container-fluid ${footer}`}>
      <div className={`row`}>
        {/* Column one */}
        <div className={`col-sm-12 col-md-12 col-lg-8`}>
          <div className={`d-block d-lg-none ${topBar}`}></div>
          <div className={`d-block d-lg-none ${tarentoLogo} ${footerRight}`}>
            <a href="https://www.tarento.com" rel="canonical" target="_blank">
              <img
                src={companyLogoImg}
                alt="Tarento"
                title="Tarento"
                width="187"
                height="43"
              />
            </a>
          </div>
          <div className={`${nxtLogo}`}>
            <a href="nxt.html" rel="canonical" target="_blank" className="">
              <img
                src={nxtLogoImg}
                alt="NXT"
                title="NXT"
                width="72"
                height="72"
              />
            </a>
          </div>
          <div className={`d-none d-lg-block ${topBar}`}></div>
          <div className={`row ${marginBtm}`}>
            <div
              className={`col-xs-12 col-sm-12 col-md-8 col-lg-6 ${footerDesc}`}
            >
              <p>
                NXT is the innovation wing of Tarento with primary focus on
                bringing new technologies, new perspectives and new ways of
                working into Tarento. We take pride in being unconventional with
                our approaches while retaining the passion with which we work.
              </p>
              <p className={`${footerHeading}`}>
                Reach us at{" "}
                <a
                  href="mailto:hello@tarento.com;"
                  className={`${footerEmail}`}
                  rel="canonical"
                >
                  hello@tarento.com
                </a>
              </p>
            </div>
            <div
              className={`col-xs-12 col-sm-12 col-md-12 col-lg-6 d-flex ps-0`}
            >
              <div className={`${directlink} ${dlinkLeft} offset-xl-2`}>
                <p className={`${footerHeading}`}>Direct Links</p>
                <ul>
                  <li>
                    <a href="nxt.html" rel="canonical">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="technology.html">Technology</a>
                  </li>
                  <li>
                    <a href="design-process.html" rel="canonical">
                      Design
                    </a>
                  </li>
                  <li>
                    <a href="nxt-innovation.html">Innovation</a>
                  </li>
                  <li>
                    <a href="pricing.html" rel="canonical">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className={`${directlink} ${dlinkRight} offset-xl-2`}>
                <p className={`${footerHeading}`}>Tech & Innovations</p>
                <ul>
                  <li>
                    <a href="data-platform.html" rel="canonical">
                      Bolt - Data Platform
                    </a>
                  </li>
                  <li>
                    <a href="rain.html" rel="canonical">
                      Rain - Analytics
                    </a>
                  </li>
                  <li>
                    <a href="thor.html" rel="canonical">
                      Thor - Chatbot
                    </a>
                  </li>
                  <li>
                    <a href="govtech.html" rel="canonical">
                      GovTech
                    </a>
                  </li>
                  <li>
                    <a href="customer-experience.html" rel="canonical">
                      Customer Experience
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Column two */}
        <div className={`col-sm-12 col-md-12 col-lg-4`}>
          <div className={`d-none d-lg-block ${tarentoLogo} ${footerRight}`}>
            <a href="https://www.tarento.com" rel="canonical" target="_blank">
              <img
                src={companyLogoImg}
                alt="Tarento"
                title="Tarento"
                width="187"
                height="43"
              />
            </a>
          </div>
          <div className={`${topBar}`}></div>
          <div className={`row`}>
            <div
              className={`col-xs-6 col-sm-12 col-md-12 col-lg-12 ${marginBtm1} d-flex ps-0`}
            >
              <div className={`${directlink} ${dlinkLeft} offset-xl-1`}>
                <p className={`${footerHeading}`}>Direct Links</p>
                <ul>
                  <li>
                    <a
                      href="https://www.tarento.com/"
                      rel="canonical"
                      target="_blank"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tarento.com/about/"
                      rel="canonical"
                      target="_blank"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tarento.com/services/"
                      rel="canonical"
                      target="_blank"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tarento.com/careers/"
                      rel="canonical"
                      target="_blank"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className={`${directlink} ${dlinkRight} offset-xl-2`}>
                <p className={`${footerHeading}`}>Programmes</p>
                <ul>
                  <li>
                    <a
                      href="https://www.tarento.com/lead/"
                      rel="canonical"
                      target="_blank"
                    >
                      Lead
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tarento.com/blixt/"
                      rel="canonical"
                      target="_blank"
                    >
                      Blixt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12`}>
          <p className={`${footerHeading} ${rights}`}>
            All rights reserved © 2023 Tarento Technologies.
          </p>
        </div>
      </div>
    </div>
  );
};
