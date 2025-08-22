/* eslint-disable no-dupe-keys */
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Base from "./Base";

import short from "../assets/short-strip.png";
import long from "../assets/large-strip.png";
import star from "../assets/Star.png";
const Card2 = () => {
  const tl = gsap.timeline();
  const keyDrop = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          // default: all screens
          isDefault: "(max-width: 1279px)",
          xl: "(min-width: 1280px)", // Tailwind xl breakpoint
        },
        (context) => {
          const { isDefault, xl } = context.conditions;

          // Falling animation
          gsap.to(keyDrop.current.querySelectorAll(".falling"), {
            y: "100%",
            duration: 6,
            repeat: -1,
            ease: "linear",
          });

          if (isDefault) {
            // Default opacity animations
            gsap.to(".key1", {
              keyframes: {
                "0%": { opacity: 1 },
                "40%": { opacity: 0 },
                "100%": { opacity: 1 },
              },
              duration: 6,
              repeat: -1,
              ease: "linear",
            });
            gsap.to(".key2", {
              keyframes: {
                "0%": { opacity: 1 },
                "46%": { opacity: 0 },
                "88%": { opacity: 0 },
                "100%": { opacity: 1 },
              },
              duration: 6,
              repeat: -1,
              ease: "linear",
            });
            gsap.to(".key3", {
              keyframes: {
                "0%": { opacity: 1 },
                "15%": { opacity: 0 },
                "100%": { opacity: 1 },
              },
              duration: 6,
              repeat: -1,
              ease: "linear",
            });
            gsap.to(".key4", {
              keyframes: {
                "0%": { opacity: 0 },
                "10%": { opacity: 1 },
                "90%": { opacity: 1 },
                "100%": { opacity: 0 },
              },
              duration: 6,
              repeat: -1,
              ease: "linear",
            });
          }

          if (xl) {
            // XL-specific opacity animations
            gsap.to(".key1", {
              keyframes: {
                "8%": { opacity: 0 },
                "50%": { opacity: 0 },
                "100%": { opacity: 1 },
                "9%": { opacity: 0 },
              },
              duration: 6,
              repeat: -1,
              ease: "linear",
            });

            gsap.to(".key3", {
              keyframes: {
                "0%": { opacity: 1 },
                "55%": { opacity: 0 },
                "1%": { opacity: 1 },
              },
              duration: 6,
              repeat: -1,
              ease: "linear",
            });
            gsap.to(".key4", {
              keyframes: {
                "0%": { opacity: 0 },
                "15%": { opacity: 1 },
                "90%": { opacity: 0 },
                "100%": { opacity: 0 },
              },
              duration: 6,
              repeat: -1,
              ease: "linear",
            });
          }
        }
      );
    },
    { scope: keyDrop }
  );

  useGSAP(() => {
    tl.to(".strip", {
      x: 720,
      y: -300,
      duration: 0.4,
      ease: "linear",
    })
      // ✨ stars blink (fade to 0.7 then back to 1)
      .to(".stars", {
        opacity: 1,
        duration: 0.6,
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
    <div className="h-screen  w-full ">
      <div
        ref={keyDrop}
        className=" h-[100vh]  relative  overflow-hidden w-full"
      >
        <div className=" key1 falling absolute rotate-80   left-[4%] top-[10%] transform  h-full w-[15%] xl:w-[12%] bg-[url('./assets/key.png')]  bg-contain bg-no-repeat bg-center "></div>
        <div className=" overflow-hidden key  absolute relative left-1/2  top-[-10%] transform -translate-x-1/2 h-full w-[35%] lg:w-[24%] bg-[url('./assets/key.png')]  bg-contain bg-no-repeat bg-center ">
          <img
            src={short}
            alt=""
            className="strip absolute bottom-12 -left-60  "
          />
          <img
            src={long}
            alt=""
            className="strip absolute bottom-2 -left-70 "
          />
        </div>
        <div className=" absolute relative left-1/2  top-[-110%] transform -translate-x-1/2 h-full w-[35%] lg:w-[24%]">
          <img
            src={star}
            alt=""
            className="stars  absolute top-[47%] left-[49%] scale-75 opacity-0"
          />
          <img
            src={star}
            alt=""
            className="stars  pendulum absolute top-[41%] left-[20%] opacity-0"
          />
          <img
            src={star}
            alt=""
            className="stars  pendulum absolute top-[60%] left-[14%] opacity-0"
          />
          <img
            src={star}
            alt=""
            className="stars  pendulum absolute top-[35%] left-[84%] scale-50 opacity-0"
          />
        </div>

        <div className="  key3 falling absolute rotate-160 left-[90%] top-[-10%] bg-[0.3] transform  h-full w-[12%] xl:w-[6%] bg-[url('./assets/key.png')]  bg-contain bg-no-repeat bg-center "></div>
        <div className=" key4 falling absolute rotate-240   left-[70%] top-[-68%] transform h-full w-[18%] xl:w-[14%] bg-[url('./assets/key.png')]  bg-contain bg-no-repeat bg-center "></div>

        <div className="  falling absolute rotate-80  left-[4%] top-[-90%]  transform  h-full w-[15%] xl:w-[12%] bg-[url('./assets/key.png')]  bg-contain bg-no-repeat bg-center "></div>

        <div className="  falling absolute rotate-160 left-[90%] top-[-110%]  bg-[0.3] transform  h-full w-[12%] xl:w-[6%] bg-[url('./assets/key.png')]  bg-contain bg-no-repeat bg-center "></div>
        <div className="  falling absolute rotate-240 left-[70%] top-[-168%] transform h-full w-[18%] xl:w-[14%] bg-[url('./assets/key.png')]  bg-contain bg-no-repeat bg-center "></div>
        <Base
          title={"Trusted Keys"}
          content={
            "Fusce vehicula rutrum lectus, ut posuere libero sodales at. Praesent erat quam, "
          }
        />
      </div>
    </div>
  );
};

export default Card2;
