interface ProjectHoverImageProps {
  name: string;
  url: string;
  date: string;
}
// @typescript-eslint/no-unused-vars
const ProjectHoverImage = ({ name, date }: ProjectHoverImageProps) => {
  return (
    <div className="second border-t-[1px] border-white w-[86vw] border-opacity-60">
      <div className=" flex-between md:my-10 my-5 relative">
        <h1 className="md:text-[5.7rem] text-[2.1rem] uppercase opacity-70">
          {name}
        </h1>
        <h5 className="">{date}</h5>
      </div>
    </div>
  );
};

export default ProjectHoverImage;
