import {
  dLinkLeft,
  dLinkRight,
  directlink,
  dlinkLeft,
  dlinkRight,
  floatRight,
  footer,
  footerDesc,
  footerEmail,
  footerHeading,
  footerRight,
  marginBtm,
  marginBtm1,
  nxtLogo,
  rights,
  tarentoLogo,
  topBar,
} from "./Footer.module.css";

interface FooterProps {
  data: {
    nxtLogoImg: any;
    nxtLogoImgTitle?: string;
    companyLogoImg: any;
    companyLogoImgTitle?: string;
    description: string;
    mailId: string;
    levelOneHeading: string;
    levelOneList: any[];
    levelTwoHeading: string;
    levelTwoList: any[];
    levelThreeHeading: string;
    levelThreeList: any[];
    levelFourHeading: string;
    levelFourList: any[];
    rightsText: string;
  };
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <div className={`container-fluid ${footer}`}>
      <div className={`row`}>
        {/* Column one */}
        <div className={`col-sm-12 col-md-12 col-xl-8`}>
          <div className={`d-block d-md-none ${topBar}`}></div>
          <div className={`d-block d-md-none ${tarentoLogo} ${footerRight}`}>
            <a href="https://www.tarento.com" rel="canonical" target="_blank">
              <img
                src={data.companyLogoImg}
                alt={data.companyLogoImgTitle}
                title={data.companyLogoImgTitle}
                width="187"
                height="43"
              />
            </a>
          </div>
          <div
            className={`d-none d-md-block d-xl-none ${tarentoLogo} ${footerRight} ${floatRight}`}
          >
            <a href="https://www.tarento.com" rel="canonical" target="_blank">
              <img
                src={data.companyLogoImg}
                alt={data.companyLogoImgTitle}
                title={data.companyLogoImgTitle}
                width="187"
                height="43"
              />
            </a>
          </div>
          <div className={`${nxtLogo}`}>
            <a href="nxt.html" rel="canonical" target="_blank" className="">
              <img
                src={data.nxtLogoImg}
                alt={data.nxtLogoImgTitle}
                title={data.nxtLogoImgTitle}
                width="72"
                height="72"
              />
            </a>
          </div>

          <div className={`d-none d-md-block ${topBar}`}></div>
          <div className={`row ${marginBtm}`}>
            <div className={`col-xs-12 col-sm-12 col-md-6 ${footerDesc}`}>
              <p>{data.description}</p>
              <p className={`${footerHeading}`}>
                Reach us at{" "}
                <a
                  href="mailto:hello@tarento.com;"
                  className={`${footerEmail}`}
                  rel="canonical"
                >
                  {data?.mailId}
                </a>
              </p>
            </div>
            <div className="col-md-6 d-flex p-0">
              <div
                className={`${directlink} ${dlinkLeft} ${dLinkLeft} offset-xl-2`}
              >
                <p className={`${footerHeading}`}>{data?.levelOneHeading}</p>
                <ul>
                  {data?.levelOneList?.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} rel="canonical">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`${directlink} ${dlinkRight} ${dLinkRight} offset-xl-2`}
              >
                <p className={`${footerHeading}`}>{data?.levelTwoHeading}</p>
                <ul>
                  {data?.levelTwoList?.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} rel="canonical">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Column two */}
        <div className={`col-sm-12 col-md-12 col-xl-4`}>
          <div className={`d-none d-xl-block ${tarentoLogo} ${footerRight}`}>
            <a href="https://www.tarento.com" rel="canonical" target="_blank">
              <img
                src={data.companyLogoImg}
                alt={data.companyLogoImgTitle}
                title={data.companyLogoImgTitle}
                width="187"
                height="43"
              />
            </a>
          </div>
          <div className={`${topBar} col-md-6 col-lg-12`}></div>
          <div className={`row`}>
            <div
              className={`col-xs-6 col-sm-12 col-md-12 col-lg-12 ${marginBtm1} d-flex ps-0`}
            >
              <div className={`${directlink} ${dlinkLeft} offset-xl-1`}>
                <p className={`${footerHeading}`}>{data?.levelThreeHeading}</p>
                <ul>
                  {data?.levelThreeList?.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} rel="canonical" target="_blank">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`${directlink} ${dlinkRight} offset-lg-1 offset-xl-2`}
              >
                <p className={`${footerHeading}`}>{data?.levelFourHeading}</p>
                <ul>
                  {data?.levelFourList?.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} rel="canonical" target="_blank">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12`}>
          <p className={`${footerHeading} ${rights}`}>{data?.rightsText}</p>
        </div>
      </div>
    </div>
  );
};
