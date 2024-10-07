import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full h-screen flex-center md:pl-60 sm:px-8 sm:py-6 py-7 px-5 mt-10">
      <div className="flex sm:gap-20 gap-10 flex-c  sm:flex-row">
        <img
          className="w-60 h-60 rounded-full"
          src="https://i.ibb.co/3ydTHtq/profile.jpg"
          alt="about"
        />
        <div className="flex-c items-start gap-2 ">
          <h2 className="uppercase opacity-60 text-sm">{`(About me)`}</h2>
          <p className=" md:w-[30vw] w-[90vw] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            aut fugit. Reprehenderit est rem, quasi adipisci doloribus tempora
            ea voluptatibus magnam accusamus corporis veniam enim officia esse,
            nemo ipsam et? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Alias iure, dicta minima vero dolorum magnam consequatur
            voluptas cumque ab repellendus, nulla numquam culpa neque quo
            praesentium consequuntur similique reprehenderit rem!
          </p>
          <button className="border-[1px] border-white rounded-full px-5 py-1 mt-5">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
