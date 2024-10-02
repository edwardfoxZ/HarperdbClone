import React, { useEffect, useRef } from "react";
import {
  dataStageIcon,
  ringIcon,
  stageIcon,
  theCompletedIcon,
  theLastLightIcon,
  toolIcon,
} from "../utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { PopupCards } from "./PopupCards";

export const PopupP = () => {
  const toolIconRef = useRef();
  const ringIconRef = useRef();
  const dataIconRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(toolIconRef.current, {
      y: window.innerHeight,
      scrollTrigger: {
        trigger: toolIconRef.current,
        start: "top 30%",
        end: "max",
        scrub: true,  
      },
    });

    gsap.to(dataIconRef.current, {
      y: 300,
      scrollTrigger: {
        trigger: toolIconRef.current,
        start: "top 15%",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="w-full h-[129vh] bg-PopupP relative overflow-hidden">
      <PopupCards />
      <img
        ref={toolIconRef}
        className="absolute top-[3%] left-[33%]"
        width="450px"
        draggable={false}
        src={toolIcon}
        alt=""
      />
      <div className="flex flex-col gap-24 absolute top-28 left-[33%]">
        <img
          ref={ringIconRef}
          width="450px"
          draggable={false}
          src={ringIcon}
          alt=""
        />
        <div ref={dataIconRef}>
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
