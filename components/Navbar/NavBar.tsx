"use client";
import { useRef } from "react";
import useGsapAnimation from "../Animation/useGsapAnimation";
import gsap from "gsap";

const NavBar = () => {
  const navRef = useRef(null);

  // Use custom hook to create animation inside Navbar
  useGsapAnimation(() => {
    gsap.from(navRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      delay: 0.7,
      ease: "power1.out",
    });
  });

  return (
    <nav className=" overflow-hidden sm:px-9 sm:py-7 py-7 px-5">
      <div className="overflow-hidden ">
        <div
          ref={navRef}
          className="flex justify-between items-center  bg-background text-white w-full"
        >
          <a className="sm:text-lg sm:font-medium " href="#">
            Janet S Park
          </a>
          <button className="text-base">MENU+</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
