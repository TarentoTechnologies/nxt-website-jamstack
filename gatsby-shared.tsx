import AOS from "aos";
import "aos/dist/aos.css";
import { Script } from "gatsby";

export const wrapPageElement = ({ element }: any): any => {
  return (
    <>
      {element}
      <Script id="aos-animations" strategy="idle">{`${
        typeof window !== "undefined" &&
        AOS.init({ duration: 600, startEvent: "DOMContentLoaded" })
      }`}</Script>
    </>
  );
};
