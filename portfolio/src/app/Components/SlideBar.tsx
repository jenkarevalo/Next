import React from "react";

import { AiFillLinkedin, AiOutlineFilePdf, AiFillGithub } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const SlideBar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <AiFillLinkedin size={30} className="cursor-pointer" />
        </>
      ),
      href: "https://www.linkedin.com/in/jenny-katherine-arevalo-rivera-5359105a/",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <AiFillGithub size={30} />
        </>
      ),
      href: "https://github.com/jenkarevalo",
    },
    {
      id: 3,
      child: (
        <>
          Mail <BsFillPersonFill size={30} />
        </>
      ),
      href: "jen.arevalo@hotmail.es",
    },
    {
      id: 4,
      child: (
        <>
          Resume <AiOutlineFilePdf size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex right-0 items-center bg-pink-300 bg-opacity-50  justify-evenly fixed top-40 p-4 flex-col">
      {links.map(({ id, child, href, style, download }) => (
        <div key={id} className={"right-0 mt-4 flex duration-300 hover:mr-4"}>
          <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noreferrer">
            {child}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SlideBar;