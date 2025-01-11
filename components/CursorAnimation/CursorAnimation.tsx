"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const CursorAnimation = () => {
  const cursorRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch device only on the client
    setIsTouchDevice("ontouchstart" in window);

    if (isTouchDevice) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    const handleMouseMove = (e: { target: any; x: any; y: any }) => {
      const { target, x, y } = e;
      const isTargetLinkOrBtn =
        target?.closest("a") || target?.closest("button");

      gsap.to(cursor, {
        x: x - 10,
        y: y - 10,
        duration: 1,
        ease: "power4",
        transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup listener on unmount
      window.removeEventListener("mousemove", handleMouseMove);
    };
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
