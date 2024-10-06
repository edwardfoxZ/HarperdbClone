import React, { useEffect, useRef } from "react";
import {
  dataStageIcon,
  ringIcon,
  cacheIcon,
  theCompletedIcon,
  theLastLightIcon,
  toolIcon,
} from "../utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { PopupCards } from "./PopupCards";

export const PopupP = () => {
  const toolIconRef = useRef();
  const ringIconRef = useRef([]);
  const cacheIconRef = useRef();
  const stageRef = useRef();
  const dataBaseRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tlCacheIcon = gsap.timeline({
      delay: 0.9,
      scrollTrigger: {
        trigger: cacheIconRef.current,
        start: "top 10%",
        end: "bottom max",
        scrub: true,
      },
    });

    gsap.to(toolIconRef.current, {
      y: window.innerHeight,
      scrollTrigger: {
        trigger: toolIconRef.current,
        start: "bottom 80%",
        end: "max",
        scrub: true,
      },
    });

    //stage was vanished then show
    gsap.fromTo(
      stageRef.current,
      { opacity: 0, ease: "power2.in" },
      {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stageRef.current,
          start: "top 80%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    //vanished the first ring icon
    gsap.to(ringIconRef.current[0], {
      ease: "power3.out",
      opacity: 0,
      scrollTrigger: {
        trigger: ringIconRef.current,
        start: "top 50%",
        end: "bottom center",
        scrub: true,
      },
    });

    //vanished the second ring icon
    gsap.to(ringIconRef.current[1], {
      ease: "power3.out",
      opacity: 0,
      scrollTrigger: {
        trigger: ringIconRef.current,
        start: "top 10%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    //start the cacheIcon
    tlCacheIcon.to(cacheIconRef.current, {
      y: 300,
      ease: "power3.inOut",
    });

    //start the dataBase
    gsap.to(dataBaseRef.current, {
      y: 200,
      ease: "power3.in",
      scrollTrigger: {
        trigger: dataBaseRef.current,
        start: "top 180%",
        end: "bottom max",
        scrub: true,
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
          ref={(el) => (ringIconRef.current[0] = el)}
          width="450px"
          draggable={false}
          src={ringIcon}
          alt=""
        />
        <div ref={cacheIconRef} className="z-10">
          <img
            className="absolute top-[19%]"
            width="450px"
            draggable={false}
            src={cacheIcon}
            alt=""
          />
          <img
            className="mt-8"
            ref={(el) => (ringIconRef.current[1] = el)}
            width="450px"
            draggable={false}
            src={ringIcon}
            alt=""
          />
        </div>
        <div ref={dataBaseRef}>
          <img
            className="absolute"
            width="450px"
            draggable={false}
            src={dataStageIcon}
            alt=""
          />
          <img width="450px" draggable={false} src={ringIcon} alt="" />
        </div>
        <img
          ref={stageRef}
          width="450px"
          draggable={false}
          src={theCompletedIcon}
          alt=""
        />
        <img width="450px" draggable={false} src={theLastLightIcon} alt="" />
      </div>
    </div>
  );
};
