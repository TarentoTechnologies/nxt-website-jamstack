import DOMPurify from "isomorphic-dompurify";
import React, { useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import {
  h4Title,
  normalBodyText,
} from "../../styles/style-guide/Typography.module.css";
import { PrimaryTitle } from "../titles/PrimaryTitle";
import { markDownStyle } from "./HubSpotForm.module.css";

interface HubSpotFormProps {
  title?: string;
  title2?: string;
  description?: any;
  col?: number;
  bgColor?: boolean;
  variant2?: boolean;
  isMarkDown?: boolean;
}
export const HubSpotForm = ({
  title,
  title2,
  description,
  col,
  bgColor,
  variant2,
  isMarkDown,
  ...props
}: HubSpotFormProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: "20375345",
          formId: "7fe3c187-dca5-48c8-a83b-c61b01fbf745",
          target: "#hubspotForm",
        });
      }
    });

    setTimeout(() => {
      let hubspotFrame =
        document.querySelector<HTMLIFrameElement>("#hs-form-iframe-0");
      let buttonInIFrame =
        hubspotFrame?.contentWindow?.document.querySelector<HTMLButtonElement>(
          ".hs-button"
        );

      if (buttonInIFrame) {
        buttonInIFrame.style.background = "rgba(0, 0, 0, 0.9)";
        buttonInIFrame.style.border = "1px solid rgba(0, 0, 0, 0.9)";
        buttonInIFrame.style.color = "white";
        buttonInIFrame.style.letterSpacing = "1";
        buttonInIFrame.style.minWidth = "220";
        buttonInIFrame.style.width = "auto";
        buttonInIFrame.style.padding = "1rem 3rem";
        buttonInIFrame.style.fontSize = "0.875rem";
        buttonInIFrame.addEventListener("mouseover", () => {
          // buttonInIFrame.style.background = "white";
          // buttonInIFrame.style.color = "rgba(0, 0, 0, 0.9)";
        });

        buttonInIFrame.addEventListener("mouseout", () => {
          // buttonInIFrame.style.background = "rgba(0, 0, 0, 0.9)";
          // buttonInIFrame.style.color = "white";
        });

        buttonInIFrame.addEventListener("click", () => {
          setTimeout(() => {
            let thankYouMsg =
              hubspotFrame?.contentWindow?.document.querySelector(
                ".submitted-message"
              ) as HTMLElement;

            if (thankYouMsg) {
              thankYouMsg.style.backgroundColor = "rgb(0, 179, 178, 0.25)";
              thankYouMsg.style.border = "1px solid #00b3b2";
              thankYouMsg.style.padding = "0.25rem 0.5rem 0.25rem";
            }
          }, 1000);
        });

        let textArea =
          hubspotFrame?.contentWindow?.document.querySelector("textarea");
        if (textArea && bgColor) {
          textArea.style.backgroundColor = "white";
          if (variant2) {
            textArea.style.border = "0";
          }
        }

        let allInputs =
          hubspotFrame?.contentWindow?.document.querySelectorAll("input");

        if (allInputs && allInputs.length > 0) {
          allInputs.forEach((element) => {
            if (
              element.type !== "submit" &&
              element.type !== "hidden" &&
              bgColor
            ) {
              element.style.backgroundColor = "white";
              if (variant2) {
                element.style.border = "0";
              }
            }
          });
        }
      }
    }, 1500);
  }, []);

  return (
    <>
      {variant2 ? (
        <section className={`layout ${bgColor ? "layoutBg" : ""}`}>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row containerService paddingLeftRight15">
              <div className="col-md-12">
                <div className={`mb-4`}>
                  {title && isMarkDown && (
                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      className={`${markDownStyle} mb-4`}
                      linkTarget="_blank"
                    >
                      {title}
                    </Markdown>
                  )}
                  {isMarkDown && (
                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      className={`${normalBodyText} mb-5 pb-1`}
                      linkTarget="_blank"
                    >
                      {description}
                    </Markdown>
                  )}
                </div>
              </div>

              <div id="hubspotForm"></div>
            </div>
          </div>
        </section>
      ) : (
        <section className={`layout ${bgColor ? "layoutBg" : ""}`}>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row justify-content-between containerService paddingLeftRight15">
              <div
                className={`${
                  col == 2
                    ? "col-sm-12 col-md-4 col-lg-4"
                    : "col-sm-12 col-md-12 col-lg-12"
                } mt-4 mt-sm-4 mt-md-4 mt-lg-4`}
              >
                <div className={`mt-3 mb-4`}>
                  {title && isMarkDown && (
                    <Markdown
                      remarkPlugins={[remarkGfm]}
                      className={`${markDownStyle} mb-4`}
                      linkTarget="_blank"
                    >
                      {title}
                    </Markdown>
                  )}
                  {title && !isMarkDown && (
                    <PrimaryTitle title={title} variant="h3600" />
                  )}
                  {title2 && (
                    <div
                      className={`${h4Title} d-inline-block align-self-center`}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(title2),
                      }}
                    />
                  )}
                </div>
                {isMarkDown ? (
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    className={`${normalBodyText} mb-5 pb-1`}
                    linkTarget="_blank"
                  >
                    {description}
                  </Markdown>
                ) : (
                  <p className={normalBodyText}>
                    {description?.data?.Description || description}
                  </p>
                )}
              </div>
              <div
                className={`${
                  col == 2
                    ? "col-sm-12 col-md-8 col-lg-7"
                    : col == 3
                    ? "col-sm-12 col-md-12 col-lg-10"
                    : "col-sm-12 col-md-12 col-lg-12"
                } p-3 ml-3 mt-4 mt-sm-4 mt-md-4 mt-lg-4`}
              >
                <div id="hubspotForm"></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
