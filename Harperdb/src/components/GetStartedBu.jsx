import React from "react";

export const GetStartedBu = ({size}) => {
  return (
    <>
      <button className= {`${size} bg-custom-gardient-button-main font-bold text-white rounded-full hover:-translate-y-2 transition duration-700`}>
        Get Started
      </button>
    </>
  );
};
