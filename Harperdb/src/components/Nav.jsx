import React from "react";
import { Logo } from "../utils";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Nav = () => {
  return (
    <div className="w-full h-[90px] flex flex-row bg-[#231f20] shadow-lg">
      <div className="flex mx-auto items-center gap-12 text-sm">
        <img className="w-[180px]" src={Logo} alt="" />
        <div className="items-center flex flex-row gap-8 font-sans text-white">
          <a>
            Platform{" "}
            <MdKeyboardArrowDown
              style={{ display: "inline-block", fontSize: "x-large" }}
            />
          </a>
          <a>
            Resources{" "}
            <MdKeyboardArrowDown
              style={{ display: "inline-block", fontSize: "x-large" }}
            />
          </a>
          <a>Docs</a>
          <a>Pricing</a>
          <a>
            About Us{" "}
            <MdKeyboardArrowDown
              style={{ display: "inline-block", fontSize: "x-large" }}
            />
          </a>

          <div className="flex flex-row ml-9 items-center">
            <button className="w-[90px] h-[7vh] bg-transparent hover:bg-[#363636] transition duration-700">
              Sign In
            </button>
            <button className="w-[80px] h-[50px] border-2 rounded-sm hover:bg-custom-gradient transition duration-700">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
