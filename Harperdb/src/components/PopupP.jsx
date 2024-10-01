import React from "react";
import {
  dataStageIcon,
  ringIcon,
  stageIcon,
  theCompletedIcon,
  theLastLightIcon,
  toolIcon,
} from "../utils";

export const PopupP = () => {
  
  return (
    <div className="w-full h-[160vh] bg-PopupP relative">
      <img
        className="absolute top-24 left-[33%]"
        width="450px"
        draggable={false}
        src={toolIcon}
        alt=""
      />
      <div className="flex flex-col gap-24 absolute top-28 left-[33%]">
        <img width="450px" draggable={false} src={ringIcon} alt="" />
        <div>
          <img
            className="absolute top-[19%]"
            width="450px"
            draggable={false}
            src={stageIcon}
            alt=""
          />
          <img width="450px" draggable={false} src={ringIcon} alt="" />
        </div>
        <div>
          <img
            className="absolute"
            width="450px"
            draggable={false}
            src={dataStageIcon}
            alt=""
          />
          <img width="450px" draggable={false} src={ringIcon} alt="" />
        </div>
        <img width="450px" draggable={false} src={theCompletedIcon} alt="" />
        <img width="450px" draggable={false} src={theLastLightIcon} alt="" />
      </div>
    </div>
  );
};
