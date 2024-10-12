import React, { useState, useEffect } from "react";
import { Nav } from "../components/Nav";
import { FiArrowRight } from "react-icons/fi";
import { TrustedByImgs } from "../utils";
import { PopupP } from "../components/PopupP";
import { Latency } from "../components/Latency";
import { GetStartedBu } from "../tools/GetStartedBu";
import { HorizonalScale } from "../components/HorizonalScale";
import { Chart } from "../components/Chart";
import { YoutubeSec } from "../components/YoutubeSec";
import { BetterServices } from "../components/BetterServices";
import { EfficientDevelopment } from "../components/EfficientDevelopment";
import { BuildAnything } from "../components/BuildAnything";

export const Main = () => {
  const [textAnimating, setTextAnimating] = useState([
    "E-Commerce",
    "Travel Platforms",
    "Sports & Betting",
    "Gaming",
    "Streaming Media",
    "SaaS",
    "Internet-of-Things",
  ]);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textAnimating.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [textAnimating.length]);

  return (
    <>
      <Nav />
      <div className="background-main w-full h-[91%]">
        <p
          className="w-[20%] absolute top-[23%] left-[32%] text-white text-6xl font-bold"
          style={{ fontFamily: "sans-serif" }}
        >
          Simplified Development for
        </p>
        <p
          className="text-gradient w-[50%] absolute top-[35%] left-[32%] text-white text-5xl font-bold animate-slide"
          style={{ fontFamily: "Ppradiogrotesk,sans-serif" }}
        >
          {textAnimating[currentText]}
        </p>
        <p className="w-[23%] absolute top-[42%] left-[32%] text-white text-xl leading-7">
          HarperDB is a distributed systems platform that combines database,
          caching, application, and streaming functions into a single
          technology. With it, you can start delivering global-scale back end
          services with less effort, higher performance, and lower cost than
          ever before.
        </p>
        <div className="absolute top-[59%] left-[32%]">
          <div className="flex flex-row gap-7">
            <GetStartedBu size="w-[50%] text-lg p-3" />
            <button className="w-32 text-sm text-gray-500 hover:translate-x-1 transition duration-600">
              Contact Sales{" "}
              <FiArrowRight
                color="white"
                fontSize="x-large"
                style={{ display: "inline-block" }}
              />
            </button>
          </div>
        </div>

        <footer>
          <div className="w-full h-[14vh] bg-footer absolute top-[85%]">
            <div className="w-full flex flex-col">
              <p className="flex mx-auto pt-11 text-white font-mono">
                Trusted By
              </p>
              <div className="flex flex-row gap-16 items-center mx-auto mt-7">
                {TrustedByImgs.map((item) => (
                  <div className="flex" key={item.id}>
                    <img width={item.size} src={item.url} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
      <PopupP />
      <Latency />
      <HorizonalScale />
      <Chart />
      <YoutubeSec />
      <BetterServices />
      <EfficientDevelopment />
      {/* <BuildAnything /> */}
    </>
  );
};
