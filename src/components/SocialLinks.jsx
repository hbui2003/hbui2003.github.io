import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/huy-bui-b8a044272/",
      icon: <FaLinkedin size={30} />,
      style: "bg-blue-500",
    },
    {
      id: 2,
      name: "Github",
      href: "https://github.com/hbui2003/",
      icon: <FaGithub size={30} />,
      style: "bg-gray-800",
    },
    {
      id: 3,
      name: "Email",
      href: "mailto:bghuy203@gmail.com",
      icon: <HiOutlineMail size={30} />,
      style: "bg-red-500",
    },
    {
      id: 4,
      name: "Resume",
      href: "/resume.pdf",
      icon: <BsFillPersonLinesFill size={30} />,
      style: "bg-green-500",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, name, href, icon, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download ? true : false}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name} {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
