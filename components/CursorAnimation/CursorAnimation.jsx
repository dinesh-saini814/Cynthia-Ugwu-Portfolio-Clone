"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CursorAnimation = () => {
  const cursorRef = useRef(null);

  const isTouchDevice = "ontouchstart" in window;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (isTouchDevice || !cursor) {
      return;
    }

    window.addEventListener("mousemove", (e) => {
      const { target, x, y } = e;
      // check if the mouse cursor is over some link or button
      const isTargetLinkOrBtn =
        target?.closest("a") || target?.closest("button");
      // using the GSAP power to animate some properties
      gsap.to(cursor, {
        x: x + -10,
        y: y + -10,
        duration: 1,
        ease: "power4",

        // opacity: isTargetLinkOrBtn ? 0.6 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
      });
    });
    // document.addEventListener("mouseleave", () => {
    //   gsap.to(cursor, {
    //     duration: 0.7,
    //     opacity: 0,
    //   });
    // });
  }, [isTouchDevice]);

  return (
    <div
      ref={cursorRef}
      className="w-3 h-3 rounded-full bg-white z-0 cursor select-none pointer-events-none fixed top-0 left-0 cursor-default hidden sm:block"
    ></div>
  );
};

export default CursorAnimation;

// function circleFollower() {
//   window.addEventListener("mousemove", (e) => {
//     console.log(e.pageX, e.pageY);
//   });
// }
