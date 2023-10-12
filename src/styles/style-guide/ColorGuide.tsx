import {
  bgBenzolGreen,
  bgBlack50,
  bgBlack60,
  bgBlack70,
  bgBlack87,
  bgBlack90,
  bgBlue,
  bgCadiumOrange,
  bgCadiumYellow,
  bgCarbon,
  bgDarkAnthraceneViolet,
  bgDarkViridianGreen,
  bgDuskyBlueViolet2,
  bgFogOfWar,
  bgGlaucousGreen,
  bgHaysBlue,
  bgLeitchsBlue,
  bgLightNeutralGray,
  bgLightViolet,
  bgNeutralGray,
  bgOxideBlue,
  bgPallidBlueViolet,
  bgPlumbagoGray,
  bgRoodsLavender,
  bgRoslynBlue,
  bgSpectrumViolet,
  bgUraniaBlue,
  bgVioletUltramarine,
  bgViridianGreen,
  bgWhite,
  bgWhite16,
  bgWhite70,
  bgWhite75,
  bgWhite85,
  bgWhite87,
  black,
  colorBox
} from "./ColorGuide.module.css";

export const ColorGuide = (): any => {
  return (
    <div className="container p-0 m-0">
      {/* First row */}
      <div className="row">
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgBlack50} p-3`}
        >
          <h5>bgBlack50</h5>
          <h6>rgba(0, 0, 0, 0.5)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgBlack60} p-3`}
        >
          <h5>bgBlack60</h5>
          <h6>rgba(0, 0, 0, 0.6)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgBlack90} p-3`}
        >
          <h5>bgBlack90</h5>
          <h6>rgba(0, 0, 0, 0.9)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgBlack70} p-3`}
        >
          <h5>bgBlack70</h5>
          <h6>rgba(0, 0, 0, 0.7)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgBlack87} p-3`}
        >
          <h5>bgBlack87</h5>
          <h6>rgba(0, 0, 0, 0.87)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgWhite} p-3`}
        >
          <h5 className={black}>bgWhite</h5>
          <h6 className={black}>#fff</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgWhite87} p-3`}
        >
          <h5 className={black}>bgWhite87</h5>
          <h6 className={black}>rgba(255, 255, 255, 0.87)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgWhite70} p-3`}
        >
          <h5 className={black}>bgWhite70</h5>
          <h6 className={black}>rgba(255, 255, 255, 0.7)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgWhite85} p-3`}
        >
          <h5 className={black}>bgWhite85</h5>
          <h6 className={black}>rgba(255, 255, 255, 0.85)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgWhite75} p-3`}
        >
          <h5 className={black}>bgWhite75</h5>
          <h6 className={black}>rgba(255, 255, 255, 0.75)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgWhite16} p-3`}
        >
          <h5 className={black}>bgWhite16</h5>
          <h6 className={black}>rgba(255, 255, 255, 0.16)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgWhite16} p-3`}
        >
          <h5 className={black}>bgWhite16</h5>
          <h6 className={black}>rgba(255, 255, 255, 0.87)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgCarbon} p-3`}
        >
          <h5>bgCarbon</h5>
          <h6>#333333</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgOxideBlue} p-3`}
        >
          <h5>bgOxideBlue</h5>
          <h6>#006eb3</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgViridianGreen} p-3`}
        >
          <h5>bgViridianGreen</h5>
          <h6>#00ae65</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgSpectrumViolet} p-3`}
        >
          <h5>bgSpectrumViolet</h5>
          <h6>#5d31a0</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgLeitchsBlue} p-3`}
        >
          <h5>bgLeitchsBlue</h5>
          <h6>#0058ab</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgDarkViridianGreen} p-3`}
        >
          <h5>bgDarkViridianGreen</h5>
          <h6>#008a35</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgRoslynBlue} p-3`}
        >
          <h5>bgRoslynBlue</h5>
          <h6>#441689</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgRoodsLavender} p-3`}
        >
          <h5>bgRoodsLavender</h5>
          <h6>#a7aaa9</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgUraniaBlue} p-3`}
        >
          <h5>bgUraniaBlue</h5>
          <h6>#120033</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgDuskyBlueViolet2} p-3`}
        >
          <h5>bgDuskyBlueViolet2</h5>
          <h6>#1f0059</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgVioletUltramarine} p-3`}
        >
          <h5>bgVioletUltramarine</h5>
          <h6>#4d33b7</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgCadiumOrange} p-3`}
        >
          <h5>bgCadiumOrange</h5>
          <h6>#f96a00</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgNeutralGray} p-3`}
        >
          <h5>bgNeutralGray</h5>
          <h6>#f1edff</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgPallidBlueViolet} p-3`}
        >
          <h5>bgPallidBlueViolet</h5>
          <h6>#ded5ff</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgGlaucousGreen} p-3`}
        >
          <h5>bgGlaucousGreen</h5>
          <h6>#ddd</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgBenzolGreen} p-3`}
        >
          <h5>bgBenzolGreen</h5>
          <h6>#0085af</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgHaysBlue} p-3`}
        >
          <h5>bgHaysBlue</h5>
          <h6>#4130a3</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgFogOfWar} p-3`}
        >
          <h5>bgFogOfWar</h5>
          <h6>#132337</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgLightNeutralGray} p-3`}
        >
          <h5>bgLightNeutralGray</h5>
          <h6>#929292</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgLightViolet} p-3`}
        >
          <h5>bgLightViolet</h5>
          <h6>RGBA(158, 145, 205, 0.6)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgDarkAnthraceneViolet} p-3`}
        >
          <h5>bgDarkAnthraceneViolet</h5>
          <h6>RGBA(63, 61, 86, 0.6)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgCadiumYellow} p-3`}
        >
          <h5>bgCadiumYellow</h5>
          <h6>RGBA(252, 161, 0, 0.6)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgPlumbagoGray} p-3`}
        >
          <h5>bgPlumbagoGray</h5>
          <h6>RGBA(151, 151, 151, 0.14)</h6>
        </div>
        <div
          className={`col-sm-12 col-md-6 col-lg-2 ${colorBox} ${bgBlue} p-3`}
        >
          <h5>bgBlue</h5>
          <h6>RGBA(41, 1, 103, 1)</h6>
        </div>
      </div>
    </div>
  );
};
