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
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(toolIconRef.current, {
      y: window.innerHeight,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: toolIconRef.current,
        start: "top 40%",
        end: "top -60%",
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
        start: "top 40%",
        end: "top 10%",
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
        pin: true,
      },
    });

    // //start the cacheIcon
    // gsap.to(cacheIconRef.current, {

    // });

    //start the dataBase
    gsap.to(dataBaseRef.current, {
      ease: "power3.in",
      scrollTrigger: {
        trigger: dataBaseRef.current,
        start: "top 50%",
        end: "top -10%",
        scrub: true,
        markers: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="w-full h-[129vh] bg-PopupP relative overflow-hidden">
      <PopupCards />
      <img
        ref={toolIconRef}
        className="absolute top-[3%] left-[33%] z-10"
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
        <div ref={cacheIconRef} className="absolute top-52">
          <img
            className="absolute top-[5%]"
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
