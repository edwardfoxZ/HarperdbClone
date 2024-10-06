import React from "react";
let YtId = "DJTvkEYJOTs?si=ANA46EczsYVfudOV";

export const YoutubeSec = () => {
  return (
    <section className="flex w-full h-[130vh] bg-Yt relative">
      <img
        className="w-full inline-block absolute top-0"
        draggable={false}
        src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/656e58f718a418b745480c75_Use%20CaseAsset%2024-p-2000.png"
        alt=""
      />
      <div className="w-[37%] h-[45%] bg-yt border-gray-200 rounded-b-2xl absolute top-[25%] left-[33%]">
        <iframe
          className="w-full min-h-[63%] rounded-t-2xl"
          src={`https://youtube.com/embed/${YtId}?autoplay=0`}
          title="YT video"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        ></iframe>
        <div className="w-full flex flex-row">
          <div className="w-full text-white p-10 mb-0">
            <p className="text-4xl font-bold">Accelerating 5G Experiences</p>
            <p className="text-xl font-thin w-full mt-6">
              Leveraging HarperDB, Edison Interactive distributed their API
              cache across Verizon's 5G Edge, plummeting latency below 20
              milliseconds.
            </p>
            <button className="w-48 translate-y-1 p-3 bg-button-yt-bg rounded-full font-bold mt-5 hover:translate-y-0 transition delay-75 duration-700 shadow-lg">
              Go To Case Study
            </button>
          </div>
          <div className="flex flex-row gap-10 items-center p-3 mr-3">
            <span className="w-0.5 h-[15vh] bg-gray-400" />
            <div className="text-white flex flex-col items-start gap-6">
              <p
                className="text-lg mb-6"
                style={{ fontFamily: "Ppradiogrotesk,sans-serif" }}
              >
                CASE STUDY
              </p>
              <img
                className="opacity-[30%]"
                width="250px"
                src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/637e8075e717cee204bf1259_Edison_Interactive%20-%20NEW%20-%20white-p-500.webp"
                alt=""
              />
              <img
                className="opacity-[30%]"
                width="250px"
                src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/637e8076c5a4561faf7b127e_Verizon-white-p-500.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img
      className="w-full absolute bottom-0"
        src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/654f13ddc2ebf709d9f3a182_Transition%20Curve-p-2000.png"
        alt=""
      />
    </section>
  );
};
