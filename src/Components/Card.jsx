import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Card = () => {
  const cardsLR = useRef();

  useGSAP(
    () => {
      gsap.to(".scroll-bg", {
        x: "-100%", // move full width
        repeat: -1, // infinite
        duration: 4, // speed (lower = faster)
        ease: "linear", // smooth continuous
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    },
    { scope: cardsLR }
  );

  return (
    <>
      <div ref={cardsLR} className="h-screen w-full overflow-hidden relative">
        <div className=" scroll-bg flex relative  h-[64vh]">
          <div className="absolute left-[0vw]  h-full w-[100%] bg-[url('./assets/sam.png')] bg-contain bg-no-repeat bg-center"></div>
          <div className=" absolute left-[calc(100vw-16px)] w-[100%] h-full bg-[url('./assets/sam.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>
        <div className="text absolute top-[65vh]">heloo</div>
      </div>
    </>
  );
};

export default Card;
