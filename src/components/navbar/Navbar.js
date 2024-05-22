import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-purple-600 mx-auto flex justify-between items-center font-titleFont">
      <div className="rounded-full overflow-hidden w-20 h-20">
        <img src={logo} alt="logo" className="w-full h-full object-cover" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-9">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-big text-white tracking-wide cursor-pointer hover:text-purple-300 duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-purple-600 absolute top-4 right-4 inline-flex items-center justify-center rounded-full text-white cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[100%] h-screen overflow-scroll absolute top-0 left-0 bg-purple-600 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-xxl text-white mt-2">
                  Hello, I'm Prabhu, a full-stack web developer passionate about crafting robust and user-friendly digital solutions. With expertise in both front-end and back-end technologies, I enjoy building dynamic web applications that meet client needs and enhance user experiences.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-black tracking-wide cursor-pointer hover:text-purple-600 duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col  gap-4">
                <h2 className="text-base first-letter:uppercase font-titleFont mb-4">
                  Find me
                </h2>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/prabhu_webdeveloper?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                    <FaInstagram />
                  </a>
                  <a href="https://github.com/Prabhuoffi" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/prabhu-k-0b3a55254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-white hover:text-white duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
