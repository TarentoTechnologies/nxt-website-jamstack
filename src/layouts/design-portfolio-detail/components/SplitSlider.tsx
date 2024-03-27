import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface SplitSliderProps {
  leftImg: any;
  rightImg: any;
}

export const SplitSlider = ({ leftImg, rightImg }: SplitSliderProps) => {
  return (
    <div>
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={leftImg} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={rightImg} alt="Image two" />}
        transition=".1s ease-in-out"
        // onlyHandleDraggable
      />
    </div>
  );
};
