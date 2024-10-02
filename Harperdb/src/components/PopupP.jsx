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

export const PopupP = () => {
  const toolIconRef = useRef();
  const ringIconRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(toolIconRef.current, {
      y: window.innerHeight,
      duration: 3,
      ease: "power3.in",
      scrollTrigger: {
        trigger: toolIconRef.current,
        start: "bottom 120%",
        end: "max",
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          const toolIconRect = toolIconRef.current.getBoundingClientRect();
          const ringIconRect = ringIconRef.current.getBoundingClientRect();
          if (toolIconRect.top <= ringIconRect.bottom) {
            ringIconRef.current.style.opacity = 1;
          } else {
            ringIconRef.current.style.opacity = 0;
          }
        },
      },
    });
  }, []);

  return (
    <div className="w-full h-[129vh] bg-PopupP relative">
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
