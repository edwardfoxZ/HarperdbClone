import React from "react";
import { VidBGBuildAnything } from "../utils";

export const BuildAnything = () => {
  return (
    <div className="flex w-full h-full bg-build-anything relative">
      <video id="video" className="pointer-events-none" autoPlay muted>
        <source src={VidBGBuildAnything} type="video/mp4" />
      </video>

      <div className="w- flex flex-row blur-build-any-title absolute top-[25%] left-[30%]">
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
