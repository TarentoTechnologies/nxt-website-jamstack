import {colorBox, bgBlack60, bgBlack90} from "./ColorGuide.module.css";

export const ColorGuide = (): any => {
  return (
    <div
      className="container-fluid p-0 m-0"
    >
      <div className="row">
        <div
          className={`col-sm-12 col-md-6 col-lg-4 ${colorBox} ${bgBlack60}`}
        ></div>
        <div
          className={`col-sm-12 col-md-6 col-lg-4 ${colorBox} ${bgBlack90}`}
        ></div>
      </div>
    </div>
  );
};
