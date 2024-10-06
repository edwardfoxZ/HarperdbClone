import React from "react";
import { GetStartedBu } from "../tools/GetStartedBu";

export const Chart = () => {
  return (
    <div className="w-full h-[135vh] bg-Chart relative">
      <div className="card-save-million text-white ml-[30%] flex flex-row gap-8 p-9">
        <div className="flex">
          <div className="bg-savings-div-bg w-3 h-[19vh]" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold text-4xl">Save Millions</p>
          <p className="w-1/3 text-gray-400 text-lg text-thin">
            Scaling horizontally lets HarperDB drastically reduce your
            infrastructure costs with a linear cost to capacity ratio.
            Enterprises that switch to HarperDB typically see savings over 50%.
          </p>
          <GetStartedBu size="w-36 p-2" />
        </div>
      </div>
      <div className="chart">
        <img
          className="w-full h-full"
          src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/63d806d2ac4c49227ddc36c2_UptdStaticDigrm-p-1600.png"
          alt=""
        />
      </div>
      <div className="text-white flex flex-col gap-10">
        <p className="flex text-5xl font-bold mx-auto">Actual Savings</p>
        <div className="flex flex-row mx-auto gap-14">
          <div className="flex flex-col items-center">
            <p className="percent text-5xl font-bold bg-text-savings-percent">
              70%
            </p>
            <p className="reduction mt-3 font-bold">
              Reduction in Compute Spend
            </p>
            <p className="reduc-percent">+ 69% reduction in latency</p>
            <p className="net mt-6 italic">- OTT Streaming</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="percent text-5xl font-bold bg-text-savings-percent">
              75%
            </p>
            <p className="reduction mt-3 font-bold">
              Reduction in Infrastructure Spend
            </p>
            <p className="reduc-percent">+ 250x reduction in latency</p>
            <p className="net mt-6 italic">- Digital OOH Ads</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="percent text-5xl font-bold bg-text-savings-percent">
              90%
            </p>
            <p className="reduction mt-3 font-bold">
              Reduction in Infrastructure Spend
            </p>
            <p className="reduc-percent">+ 92% reduction in latency</p>
            <p className="net mt-6 italic">- Global Gaming Network</p>
          </div>
        </div>
      </div>
    </div>
  );
};
