"use client";
import Data from "./Data";
import { useState } from "react";
import { motion } from "framer-motion";
import Product from "./Product";
import Image from "next/image";

const projects = Data.Projects;

const WorkSection = () => {
  const [position, setPosition] = useState(0);

  const handleScroll = (val: number) => {
    setPosition(val * 12);
  };

  return (
    <div className="w-full h-auto md:mt-14 sm:px-8 sm:py-6 py-5 px-5 ">
      <div className=" md:mt-40  border-b-[1px] border-opacity-50 relative">
        {projects.map((item, index) => (
          <Product key={index} item={item} mover={handleScroll} count={index} />
        ))}
        <div className="w-full h-full  absolute -top-10 pointer-events-none hidden md:block ">
          <motion.div
            initial={{ y: position, x: "-50%" }}
            animate={{ y: position + `rem`, x: "-50%" }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className="window absolute w-[24rem] h-[16rem] bg-zinc-800 left-[45%]  overflow-hidden rounded-lg "
          >
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="w-full h-[full] bg-zinc-800 left-[45%] "
            >
              <Image
                className="w-full h-full  object-cover"
                src="https://cynthiaugwu.com/images/cover/lucid-motors.webp"
                alt="lucid motors"
                width={400}
                height={400}
              />
            </motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="w-full h-full bg-zinc-800 left-[45%]  "
            >
              <Image
                className="w-full h-full  object-cover"
                src="https://cynthiaugwu.com/images/cover/baron-capital.webp"
                alt="baron capital"
                width={400}
                height={400}
              />
            </motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="w-full h-full bg-zinc-800 left-[45%]  "
            >
              <Image
                className="w-full h-full  object-cover"
                src="https://cynthiaugwu.com/images/cover/nfl.webp"
                alt="nfl"
                width={400}
                height={400}
              />
            </motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="w-full h-full bg-zinc-800 left-[45%]  "
            >
              <Image
                className="w-full h-full  object-cover"
                src="https://cynthiaugwu.com/images/cover/placenew.webp"
                alt="placenew"
                width={400}
                height={400}
              />
            </motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              className="w-full h-full bg-zinc-800 left-[45%]  "
            >
              <Image
                className="w-full h-full  object-cover"
                src="https://cynthiaugwu.com/images/cover/somos.webp"
                alt="somos"
                width={400}
                height={400}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <button className="border-[1px] px-5 py-1 border-white rounded-full mt-10">
        View all work
        <span className="opacity-60 ml-1">⁸</span>
      </button>
    </div>
  );
};

export default WorkSection;
