// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const useGsapAnimation = (animationCallback) => {
//   const animationRef = useRef();

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       animationCallback();
//     });

//     return () => ctx.revert();
//   }, [animationCallback]);

//   return animationRef;
// };

// export default useGsapAnimation;

import { useEffect } from "react";
import gsap from "gsap";

const useGsapAnimation = (animationCallback: unknown) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      animationCallback();
    });

    return () => ctx.revert();
  }, [animationCallback]);
};

export default useGsapAnimation;
