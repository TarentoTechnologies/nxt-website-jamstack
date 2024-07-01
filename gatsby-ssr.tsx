import { RecoilRoot } from "recoil";

interface wrapperProps {
  element: any;
  props: any;
}

export const wrapRootElement = ({ element, props }: wrapperProps) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>;
};

/**
 * Pre-load fonts
 * Font Family:
 *  1. Lato
 *  2. Roboto Slab
 */
export const onRenderBody = ({ setHeadComponents }: any) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Lato/woff2/Lato-Black.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="latoBlack"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/woff2/Lato-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="latoBold"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/woff2/Lato-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="latoLight"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/woff2/Lato-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="latoRegular"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/woff2/Lato-Thin.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="latoThin"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/woff2/RobotoSlab-Black.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoSlabBlack"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/woff2/RobotoSlab-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoSlabBold"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/woff2/RobotoSlab-ExtraBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoSlabExtraBold"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/woff2/RobotoSlab-ExtraLight.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoSlabExtraLight"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/woff2/RobotoSlab-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoSlabLight"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/woff2/RobotoSlab-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoSlabMedium"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/woff2/RobotoSlab-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoSlabRegular"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/woff2/RobotoSlab-SemiBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoSlabSemiBold"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/woff2/RobotoSlab-Thin.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="robotoSlabThin"
    />,
  ]);
};

export { wrapPageElement } from "./gatsby-shared";
