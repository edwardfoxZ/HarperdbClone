import React, { useEffect, useRef } from "react";
import { Latencies } from "../utils";
import { GetStartedBu } from "../tools/GetStartedBu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SpecialGrid } from "../tools/SpecialGrid";

export const Latency = () => {
  const LatenciesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    LatenciesRef.current.forEach((lan, index) => {
      gsap.fromTo(
        lan,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: lan,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );
    });
  }, []);
  return (
    <div className="bg-Latency w-full h-[120vh] relative">
      <div>
        <img
          className="z-10 max-w-[90vh] absolute right-0 top-[18%]"
          src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/638a700e727f5175f16e48c5_PolyGlobe3.png"
          srcSet="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/638a700e727f5175f16e48c5_PolyGlobe3.png"
          alt=""
        />

        <div className="absolute top-[25%] left-[33%]">
          <p className="w-80 text-5xl font-bold leading-snug text-white ">
            Achieve Any Latency SLA
          </p>
          <p className="w-80 text-xl text-gray-400 font-thin mt-4">
            You can't change the speed of light, but you can put less light
            between your users and their data.
          </p>
          <div
            className="flex flex-row gap-14 items-center"
            style={{ fontFamily: "Ppradiogrotesk, sans-serif" }}
          >
            <SpecialGrid className="w-3 h-[48vh] bg-latency-div-bg mt-9" />
            <div className="flex flex-col gap-12">
              {Latencies.map((lan, index) => (
                <div
                  ref={(el) => (LatenciesRef.current[index] = el)}
                  key={lan.id}
                >
                  <p className="text-5xl font-bold text-white">{lan.title}</p>
                  <p className="text-white">{lan.detail}</p>
                </div>
              ))}
              <GetStartedBu size="text-lg p-3 w-[150px] h-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
