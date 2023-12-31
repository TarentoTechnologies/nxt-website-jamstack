import React from "react";
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
      href="/fonts/Lato/Lato-Black.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="latoBlack"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/Lato-BlackItalic.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="latoBlackItalic"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/Lato-Bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="latoBold"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/Lato-BoldItalic.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="latoBoldItalic"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/Lato-Italic.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="latoItalic"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/Lato-Light.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="latoLight"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/Lato-LightItalic.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="latoLightItalic"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/Lato-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="latoRegular"
    />,

    <link
      rel="preload"
      href="/fonts/Lato/Lato-Thin.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="latoThin"
    />,
    <link
      rel="preload"
      href="/fonts/Lato/Lato-ThinItalic.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="latoThinItalic"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/RobotoSlab-Black.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="robotoSlabBlack"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/RobotoSlab-Bold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="robotoSlabBold"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/RobotoSlab-ExtraBold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="robotoSlabExtraBold"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/RobotoSlab-ExtraLight.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="robotoSlabExtraLight"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/RobotoSlab-Light.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="robotoSlabLight"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/RobotoSlab-Medium.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="robotoSlabMedium"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/RobotoSlab-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="robotoSlabRegular"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/RobotoSlab-SemiBold.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="robotoSlabSemiBold"
    />,
    <link
      rel="preload"
      href="/fonts/static/Roboto_Slab/RobotoSlab-Thin.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="robotoSlabThin"
    />,
  ]);
};

export { wrapPageElement } from "./gatsby-shared";
