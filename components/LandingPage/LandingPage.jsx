"use client";
import gsap from "gsap";
import { useRef } from "react";
import useGsapAnimation from "../Animation/useGsapAnimation";

const LandingPage = () => {
  const headingRef = useRef([]);
  const textRef = useRef([]);
  const footerRef = useRef(null);

  useGsapAnimation(() => {
    const tl = gsap.timeline();

    tl.from(headingRef.current, {
      y: 100,
      duration: 1,
      opacity: 0,
      ease: [0.6, 0.05, -0.01, 0.9],
      stagger: 0.1,
      delay: 1, // You can add a delay for coordinated animation with Navbar
    });

    tl.from(textRef.current, {
      y: -30,
      duration: 0.5,
      opacity: 0,
      // ease: [0.6, 0.05, -0.01, 0.9],
      stagger: 0.1,
    });

    tl.from(footerRef.current, {
      opacity: 0,
      duration: 0.5,
    });
  });

  return (
    <div className=" h-[100vh] w-full">
      <div className=" flex leading-none flex-col uppercase ml-5 sm:ml-9 pt-5 sm:pt-8 ">
        <div className="w-fit overflow-hidden">
          <h1
            ref={(el) => (headingRef.current[0] = el)}
            className="sm:text-[8rem] text-[3.4rem] opacity-60 sm:tracking-[.3rem] "
          >
            product
          </h1>
        </div>
        {/* <div className="border-2 w-fit">
        </div> */}
        <div className="w-fit ">
          {" "}
          <div className=" w-fit overflow-hidden ">
            <h1
              ref={(el) => (headingRef.current[1] = el)}
              className="sm:text-[8rem] text-[3.4rem] opacity-60 ml-14 sm:ml-32 sm:tracking-[.3rem]"
            >
              Designer
            </h1>
          </div>
          <div className=" overflow-hidden ">
            <h5
              ref={(el) => (headingRef.current[2] = el)}
              className="sm:text-[1rem] text-[.65rem] text-right sm:font-bold sm:tracking-normal tracking-widest leading-8"
            >
              BASED IN TORONTO
            </h5>
          </div>
        </div>
      </div>
      <div className="Small-headings text-right mt-20 sm:px-8 sm:py-6 py-7 px-5 text-sm sm:text-base uppercase">
        <div className="overflow-hidden">
          <h5 ref={(el) => (textRef.current[1] = el)} className="">
            AVAILABLE FOR FULL TIME & FREELANCE
          </h5>
          <h5 ref={(el) => (textRef.current[0] = el)} className="">
            WORK FROM SEP ‘24
          </h5>
        </div>
      </div>
      <div
        ref={footerRef}
        className="hero-footer flex-between sm:px-8 px-5 text-[1.7vh] sm:text-[2.5vh] sm:mt-0 mt-48"
      >
        <div className="flex sm:gap-3 gap-1">
          <a href="#">
            PREVIOUSLY WORKED AT <br />
            CODE AND THEORY{" "}
          </a>
          <svg
            data-v-af034062=""
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-af034062=""
              d="M9.66353 6.95516L14.8459 8.34376L13.4573 13.5261"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              data-v-af034062=""
              d="M5.64453 13.6562L14.754 8.39687"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <a href="#" className=" flex sm:gap-3 ">
          <span className="">
            PROTOPIE <br className="md:hidden block" /> AMBASSADOR
          </span>
          <svg
            data-v-af034062=""
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-af034062=""
              d="M9.66353 6.95516L14.8459 8.34376L13.4573 13.5261"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              data-v-af034062=""
              d="M5.64453 13.6562L14.754 8.39687"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
        <div className=" hidden md:block">
          <span className="flex-r gap-1 ">
            <a href="">
              <svg
                data-v-af034062=""
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  data-v-af034062=""
                  cx="13"
                  cy="13"
                  r="13"
                  fill="#AAAAAA"
                ></circle>{" "}
                <g data-v-af034062="" clip-path="url(#clip0_404_565)">
                  <rect
                    data-v-af034062=""
                    width="16"
                    height="16"
                    transform="translate(5 5)"
                    fill="black"
                  ></rect>{" "}
                  <path
                    data-v-af034062=""
                    d="M13 0C5.824 0 0 5.824 0 13C0 20.176 5.824 26 13 26C20.176 26 26 20.176 26 13C26 5.824 20.176 0 13 0ZM17.589 14.339L13.689 18.239C13.494 18.434 13.247 18.525 13 18.525C12.753 18.525 12.506 18.434 12.311 18.239L8.411 14.339C8.034 13.962 8.034 13.338 8.411 12.961C8.788 12.584 9.412 12.584 9.789 12.961L12.025 15.197V8.45C12.025 7.917 12.467 7.475 13 7.475C13.533 7.475 13.975 7.917 13.975 8.45V15.197L16.211 12.961C16.588 12.584 17.212 12.584 17.589 12.961C17.966 13.338 17.966 13.962 17.589 14.339Z"
                    fill="#AAAAAA"
                  ></path>
                </g>{" "}
                <defs data-v-af034062="">
                  <clipPath data-v-af034062="" id="clip0_404_565">
                    <rect
                      data-v-af034062=""
                      width="26"
                      height="26"
                      rx="13"
                      fill="white"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="">
              <svg
                data-v-af034062=""
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  data-v-af034062=""
                  cx="13"
                  cy="13"
                  r="13"
                  fill="#AAAAAA"
                ></circle>{" "}
                <g data-v-af034062="" clip-path="url(#clip0_404_565)">
                  <rect
                    data-v-af034062=""
                    width="16"
                    height="16"
                    transform="translate(5 5)"
                    fill="black"
                  ></rect>{" "}
                  <path
                    data-v-af034062=""
                    d="M13 0C5.824 0 0 5.824 0 13C0 20.176 5.824 26 13 26C20.176 26 26 20.176 26 13C26 5.824 20.176 0 13 0ZM17.589 14.339L13.689 18.239C13.494 18.434 13.247 18.525 13 18.525C12.753 18.525 12.506 18.434 12.311 18.239L8.411 14.339C8.034 13.962 8.034 13.338 8.411 12.961C8.788 12.584 9.412 12.584 9.789 12.961L12.025 15.197V8.45C12.025 7.917 12.467 7.475 13 7.475C13.533 7.475 13.975 7.917 13.975 8.45V15.197L16.211 12.961C16.588 12.584 17.212 12.584 17.589 12.961C17.966 13.338 17.966 13.962 17.589 14.339Z"
                    fill="#AAAAAA"
                  ></path>
                </g>{" "}
                <defs data-v-af034062="">
                  <clipPath data-v-af034062="" id="clip0_404_565">
                    <rect
                      data-v-af034062=""
                      width="26"
                      height="26"
                      rx="13"
                      fill="white"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
