import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Base from "./Base";

const Card = () => {
  const cardsLR = useRef();
  const tofro = useRef();

  const tl = gsap.timeline();

  useGSAP(
    () => {
      gsap.to(".scroll-bg", {
        x: "100%", // move full width
        repeat: -1, // infinite
        duration: 6, // speed (lower = faster)
        ease: "linear", // smooth continuous
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    },
    { scope: cardsLR }
  );

  useGSAP(
    () => {
      gsap.to(".pendulum", {
        rotation: 15, // max swing angle
        transformOrigin: "top center", // pivot at the top
        duration: 4,
        yoyo: true, // swing back
        repeat: -1, // infinite
        ease: "power1.inOut", // smooth swing
      });
    },
    { scope: tofro }
  );

  useGSAP(() => {
    tl.to(".strip", {
      x: 980,
      y: -300,
      duration: 0.6,
      ease: "linear",
    })
      // ✨ stars blink (fade to 0.7 then back to 1)
      .to(".stars", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
      })
      .to(".stars", {
        opacity: 1,
        duration: 2,
      })
      // 🌌 finally vanish stars completely
      .to(".stars", {
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
      })
      .to(".stars", {
        delay: 2,
      })
      // reset strips
      .set(".strip", { x: 0, y: 0 })
      .repeat(-1);
  });

  return (
    <div>
      <div
        ref={cardsLR}
        className="h-screen w-full overflow-hidden relative pt-3 "
      >
        <div className=" scroll-bg flex relative  h-[64vh] ">
          <div className="  absolute left-[0vw]  h-full w-[100%] bg-[url('./assets/card.png')]  xl:bg-[url('./assets/sam.png')]  bg-contain bg-no-repeat bg-center "></div>
          <div className=" absolute left-[calc(-100vw)] w-[100%] bg-[url('./assets/card.png')] h-full xl:bg-[url('./assets/sam.png')] bg-contain bg-no-repeat bg-center"></div>
        </div>

        <div ref={tofro} className="absolute top-[2vh]  w-[100%] h-[64vh] ">
          <div className="pendulum card-masking w-[60%] h-full   bg-[url('./assets/id.png')] bg-contain bg-no-repeat bg-center absolute pl-20 pt-15 xl:pl-15 xl:pt-10 top-[4vh] transform xl:translate-x-[105%]  ">
            <img
              src="/assets/short-strip.png"
              alt=""
              className="strip absolute bottom-[-16vh] left-[-10vw] "
            />
            <img
              src="/assets/large-strip.png"
              alt=""
              className="strip absolute bottom-[-29vh] left-[-12vw] scale-125"
            />
          </div>
          <div
            className=" absolute w-[15%] top-[10vh]
  h-[54vh] left-[600px] -rotate-10 overflow-hidden pointer-events-none"
          >
            {/* Top star */}
            <img
              src="/assets/star.png"
              alt="star"
              className="absolute stars  opacity-0 pendulum"
              style={{
                top: "8%",
                left: "10%",
                width: "30px",
                height: "30px",
                transform: "translateX(-50%)",
              }}
            />

            {/* Bottom star */}
            <img
              src="/assets/star.png"
              alt="star"
              className="absolute stars opacity-0 pendulum"
              style={{
                bottom: "8%",
                left: "50%",
                width: "30px",
                height: "30px",
                transform: "translateX(-50%)",
              }}
            />

            {/* Left star */}
            <img
              src="/assets/star.png"
              alt="star"
              className="absolute stars opacity-0 pendulum"
              style={{
                top: "30%",
                left: "48%",
                width: "25px",
                height: "25px",
                transform: "translateY(-50%)",
              }}
            />

            {/* Right star */}
            <img
              src="/assets/star.png"
              alt="star"
              className="absolute stars opacity-0 pendulum"
              style={{
                top: "50%",
                right: "68%",
                width: "35px",
                height: "35px",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </div>
        <Base
          title={"Permission Control"}
          content={
            "Fusce vehicula rutrum lectus, ut posuere libero sodales at. Praesent erat quam, "
          }
        />
      </div>
    </div>
  );
};

export default Card;
