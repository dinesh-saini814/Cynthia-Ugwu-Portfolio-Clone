import { useEffect } from "react";
import gsap from "gsap";

const useGsapAnimation = (animationCallback: () => void) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      animationCallback();
    });

    return () => ctx.revert();
  }, [animationCallback]);
};

export default useGsapAnimation;
