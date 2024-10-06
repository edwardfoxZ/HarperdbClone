import React from "react";
import { HiArrowRight } from "react-icons/hi2";

export const BetterServices = () => {
  return (
    <div className="w-full h-[80vh] bg-better-services flex flex-col overflow-hidden relative">
      <p className="text-4xl font-bold text-white flex mx-auto mt-20">
        Better Services for Everyone
      </p>
      <div className="flex flex-row gap-6 mt-20 w-full ml-[27%]">
        <div className="w-[14%] h-full inline bg-[#4b59ea] rounded-2xl">
          <a
            className="w-full h-full flex bag1-services-gaming rounded-2xl hover:-translate-x-4 hover:-translate-y-4 transition delay-100 duration-700"
            href=""
          >
            <div className="flex flex-col text-white p-6">
              <h1 className="text-5xl">Streaming Media</h1>
              <p className="text-lg font-thin w-[70%] mt-5">
                Deliver optimized distributed services that maximize viewer
                enjoyment, ensure fair content access, and provide personalized
                recommendations that keep viewers engaged.
              </p>
              <a className="text-xl mt-8" href="">
                Learn More
                <HiArrowRight
                  color="#20e9a9"
                  fontSize="x-large"
                  style={{ display: "inline-block" }}
                />
              </a>
            </div>
          </a>
        </div>
        <div />
        <div className="w-[14%] h-full inline bg-[#4b59ea] rounded-2xl">
          <a
            className="w-full h-full flex bag2-services-gaming rounded-2xl hover:-translate-x-4 hover:-translate-y-4 transition delay-100 duration-700"
            href=""
          >
            <div className="flex flex-col text-white p-6">
              <h1 className="text-5xl">Gaming</h1>
              <p className="text-lg font-thin w-[70%] mt-5">
                Unlock peak performance by implementing a distributed systems
                architecture to level up both gaming and developer experiences
                while keeping infrastructure costs low.
              </p>
              <a className="text-xl mt-8" href="">
                Learn More{""}
                <HiArrowRight
                  color="#20e9a9"
                  fontSize="x-large"
                  style={{ display: "inline-block" }}
                />{" "}
              </a>
            </div>
          </a>
        </div>
        <div className="w-[14%] h-full inline bg-[#4b59ea] rounded-2xl">
          <a
            className="w-full h-full flex bag3-services-gaming rounded-2xl hover:-translate-x-4 hover:-translate-y-4 transition delay-100 duration-700"
            href=""
          >
            <div className="flex flex-col text-white p-6">
              <h1 className="text-5xl">Digital Commerce</h1>
              <p className="text-lg font-thin w-[70%] mt-5">
                Maximize your revenue potential with top-performing core web
                vitals, streamlined cross-channel experiences, and integrated
                operations from logistics to workforce enablement.
              </p>
              <a className="text-xl mt-8" href="">
                Learn More{""}
                <HiArrowRight
                  color="#20e9a9"
                  fontSize="x-large"
                  style={{ display: "inline-block" }}
                />{" "}
              </a>
            </div>
          </a>
        </div>
      </div>
      <img
        className="absolute bottom-0 w-full"
        src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/66297d8069fa1a9bf18c9f3e_SectionTransition2-p-2000.png"
        alt=""
      />
    </div>
  );
};
