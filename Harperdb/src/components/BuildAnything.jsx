import React from "react";
import { VidBGBuildAnything } from "../utils";

export const BuildAnything = () => {
  const showVid = () => {
    if (VidBGBuildAnything) {
      <video
        className="w-full h-full"
        style='background-image:url("https://cdn.prod.website-files.com/6374050260446c42f94dc90f/645aa43f654710e077b70eed_Digital%20Wave-poster-00001.jpg")'
        autoPlay
        muted
      >
        <source src={VidBGBuildAnything} type="video/mp4" />
      </video>;
    }
  };

  return (
    <div className="w-full h-full bg-build-anything relative">
      <div className="w- flex flex-row blur-build-any-title absolute top-[25%] left-[30%]">
        {showVid()}
        <div className="w-full text-black flex flex-col">
          <h1 className="w-[50%] text-5xl">Build Anything Better</h1>
          <img
            className="w-[200px]"
            src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/645d2623f1e90aa5a7c52387_SoluPicOpt1%20(1).png"
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};
