const ProjectHoverImage = ({ name, url, date }) => {
  return (
    <div className="second border-t-[1px] border-white w-[86vw] border-opacity-60">
      <div className=" flex-between md:my-10 my-5 relative">
        <img
          className="absolute z-50 w-[50vh] h-[60vh] hidden"
          src={url}
          alt="image"
        />
        <h1 className="md:text-[5.7rem] text-[2.1rem] uppercase opacity-70">
          {name}
        </h1>
        <h5 className="">{date}</h5>
      </div>
    </div>
  );
};

export default ProjectHoverImage;
