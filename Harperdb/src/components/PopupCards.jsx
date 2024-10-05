import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { CardsPopup } from "../utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Power2 } from "gsap";

export const PopupCards = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: -500, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          transition: 20,
          ease: Power2.easeIn,
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const Cards = CardsPopup;
  return (
    <div className="w-full flex flex-col gap-24 absolute top-[12%] left-[57%]">
      {Cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className="Card-Popup w-[18%] rounded-2xl bg-popupCard flex flex-col gap-3 p-5"
        >
          <a className="text-3xl font-bold text-white" href="">
            {card.str} <FiArrowRight style={{ display: "inline-block" }} />
          </a>
          <p className="font-light text-white">{card.title}</p>
        </div>
      ))}
    </div>
  );
};
