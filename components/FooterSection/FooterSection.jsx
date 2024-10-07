const FooterSection = () => {
  return (
    <div className="w-full h-auto sm:px-8 sm:py-6 py-7 px-5 ">
      <div className="flex-c">
        <h2 className="">Oops, almost forgot…</h2>
        <div className="flex items-center gap-3">
          <h2 className="uppercase">SUBSCRIBE TO MY YOUTUBE CHANNEL</h2>
          <span className="">
            <svg
              data-v-af034062=""
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-af034062=""
                d="M9.66353 6.95516L14.8459 8.34376L13.4573 13.5261"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                data-v-af034062=""
                d="M5.64453 13.6562L14.754 8.39687"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="mt-32 sm:flex-between flex-c">
        <div className="uppercase md:flex sm:gap-6 flex-between py-5">
          <span className="">© 2024</span>
          <span className="">4:21 AM ET</span>
        </div>
        <div className="border-t-[1px] border-white border-opacity-60 md:hidden block"></div>
        <div className="uppercase flex gap-10">
          <a href="">linkedin</a>
          <a href="">x/twitter</a>
          <a href="">instagram</a>
          <a href="">youtube</a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
