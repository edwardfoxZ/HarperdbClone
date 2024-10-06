import React, { useEffect, useRef } from "react";
import { GetStartedBu } from "../tools/GetStartedBu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SpecialGrid } from "../tools/SpecialGrid";

export const HorizonalScale = () => {
  const ScaleRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScaleRef.current.forEach((el, index) => {
      gsap.fromTo(
        ScaleRef.current[index],
        {
          y: -100,
          opacity: 0,
          ease: "power2.inOut",
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.inOut",
          stagger: "0.5",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 10%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex w-ful h-[120vh] bg-[#161616] relative">
      <div className="flex flex-col mx-auto items-end gap-8 absolute top-64 right-[35%] font-light">
        <p
          dir="rtl"
          style={{ letterSpacing: "3px" }}
          className="w-20 text-4xl font-bold text-white text-right"
        >
          Unlimited Horizontal Scale
        </p>
        <p dir="rtl" className="w-80 text-xl font-normal text-gray-400">
          Outperform NoSQL alternatives in throughput, latency, total cost of
          ownership, and simplicity at scale.
        </p>
        <div className="flex flex-row items-center gap-10">
          <div className="flex flex-col gap-11 items-end">
            <div
              ref={(el) => (ScaleRef.current[0] = el)}
              className="text-white flex flex-col items-end"
            >
              <p>Up to</p>
              <p className="text-5xl font-bold flex flex-col items-end">
                20,000
              </p>
              <p>Writes/Second/Node</p>
            </div>
            <div
              ref={(el) => (ScaleRef.current[1] = el)}
              className="text-white flex flex-col items-end"
            >
              <p>Up to</p>
              <p className="text-5xl font-bold">120,000</p>
              <p>Reads/Second/Node</p>
            </div>
            <div
              ref={(el) => (ScaleRef.current[2] = el)}
              className="text-white flex flex-col items-end"
            >
              <p className="text-5xl font-bold">Unlimited</p>
              <p>Nodes/Global Cluster</p>
            </div>
            <div>
              <GetStartedBu size="w-36 p-3" />
            </div>
          </div>
          <SpecialGrid className="w-3 h-[37vh] bg-latency-div-bg mt-9" />
        </div>
      </div>
      <img
        className="min-w-[100%] inline-block absolute bottom-0"
        src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/6570806322ae05f257a77230_Use%20CaseAsset%2024%20Invert-p-2000.png"
        alt=""
      />
      <img
        className="w-[450px] h-[370px] absolute top-[35%] left-[34%]"
        src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/638a78728a6a0b8467a8b0c5_ScaleImg.png"
        alt=""
      />
    </div>
  );
};
