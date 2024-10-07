import ProjectHoverImage from "./ProjectHoverImage";

const WorkSection = () => {
  return (
    <div className="w-full h-auto mt-14 sm:px-8 sm:py-6 py-7 px-5 ">
      <div className="border-b-[1px] border-white w-[86vw] border-opacity-60">
        {" "}
        <ProjectHoverImage
          name={"lucid motors"}
          url={"https://cynthiaugwu.com/images/cover/lucid-motors.webp"}
          date={"2023"}
        />
        <ProjectHoverImage
          name={"baron capital"}
          url={"https://cynthiaugwu.com/images/cover/baron-capital.webp"}
          date={"2023"}
        />
        <ProjectHoverImage
          name={"nfl"}
          url={"https://cynthiaugwu.com/images/cover/nfl.webp"}
          date={"2024"}
        />
        <ProjectHoverImage
          name={"placenew"}
          url={"https://cynthiaugwu.com/images/cover/placenew.webp"}
          date={"2024"}
        />
        <ProjectHoverImage
          name={"somos"}
          url={"https://cynthiaugwu.com/images/cover/somos.webp"}
          date={"2023"}
        />
      </div>
      <button className="border-[1px] px-5 py-1 border-white rounded-full mt-10">
        View all work
        <span className="opacity-60 ml-1">⁸</span>
      </button>
    </div>
  );
};

export default WorkSection;
