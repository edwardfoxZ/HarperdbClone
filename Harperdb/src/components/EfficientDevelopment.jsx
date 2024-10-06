import React from "react";
import { SpecialGrid } from "../tools/SpecialGrid";
import { GetStartedBu } from "../tools/GetStartedBu";

export const EfficientDevelopment = () => {
  return (
    <div className="w-full flex flex-col h-[135vh] bg-efficiantDev relative">
      <div className="flex flex-row p-10 items-start content-center gap-5 absolute top-[10%] left-[25%]">
        <SpecialGrid className="w-3 h-[23vh] bg-latency-div-bg" />
        <div className="flex flex-col gap-8 text-white">
          <h1 className="w-3.5 text-5xl font-semibold leading-tight">
            Efficient Development
          </h1>
          <p className="w-[55%] text-xl font-thin">
            From POC to IPO, HarperDB is the best platform to start with and
            scale with.
          </p>
          <GetStartedBu size="w-36 p-3" />
        </div>
      </div>

      <div className="absolute top-[40%] left-[26.7%] flex flex-col gap-16">
        <div className="w-[50%] h-auto bg-efficiant-dev-card rounded-xl text-white p-0.5">
          <div className="w-full h-full bg-[#383d40] p-5 rounded-xl">
            <h1 className="text-4xl font-bold">Go to Market Faster</h1>
            <div>
              <h2 className="text-pretty font-semibold mt-7">
                Unified System Architecture
              </h2>
              <p className="font-thin mt-1">
                Groundbreaking system efficiency delivers high-performance
                applications with minimal development effort.
              </p>
              <h2 className="text-pretty font-semibold mt-7">
                GraphQL-Style Schema Definition
              </h2>
              <p className="font-thin mt-1">
                Ditch drivers and create a RESTful API and the tables that back
                it in seconds.
              </p>
              <h2 className="text-pretty font-semibold mt-7">Dynamic Schema</h2>
              <p className="font-thin mt-1">
                Our document data model auto-updates as fast as you can code.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-auto bg-efficiant-dev-card rounded-xl text-white p-0.5">
          <div className="w-full h-full bg-[#383d40] p-5 rounded-xl">
            <h1 className="text-4xl font-bold">Come as You Are</h1>
            <div>
              <h2 className="text-pretty font-semibold mt-7">
                Familiar Workflow
              </h2>
              <p className="font-thin mt-1">
                Bring your own or use our web-based IDE to build applications on
                top of the data that powers them.
              </p>
              <h2 className="text-pretty font-semibold mt-7">Query with SQL</h2>
              <p className="font-thin mt-1">
                The simplicity of a document store with the power of SQL
              </p>
              <h2 className="text-pretty font-semibold mt-7">
                Language Agnostic
              </h2>
              <p className="font-thin mt-1">
                Write business logic in any language and manage the output
                natively
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
