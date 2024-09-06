import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Nav_slide(props) {
  const { hiddenNav, theme } = props;

  useEffect(() => {
    if (theme) {
      document.querySelector("#sliding-navbar").classList.add("light-mode--header");
      document.querySelector("#sliding-navbar").classList.remove("dark-mode");
    } else {
        document.querySelector("#sliding-navbar").classList.remove("light-mode--header");
        document.querySelector("#sliding-navbar").classList.add("dark-mode");
    }
  }, [theme]);

  return (
    <div className="absolute h-full w-full top-1 left-0" id="sliding-navbar">
      <svg
        className="w-4 h-auto m-5 md:w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 30 30"
        onClick={hiddenNav}
      >
        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
      </svg>

      <ul className="text-base font-bold">
        <li className="">
          <Link
            className="inline-block hover:scale-105 m-5 "
            to="/"
            onClick={hiddenNav}
          >
            Home
          </Link>
        </li>
        <hr />
        <li className="">
          <Link
            className="inline-block hover:scale-105 m-5 "
            to="about"
            onClick={hiddenNav}
          >
            About
          </Link>
        </li>
        <hr />
        <li className="">
          <Link
            className="inline-block hover:scale-105 m-5 "
            to="skills"
            onClick={hiddenNav}
          >
            Skill
          </Link>
        </li>
        <hr />
        <li className="">
          <Link
            className="inline-block hover:scale-105 m-5 "
            to="project"
            onClick={hiddenNav}
          >
            Project
          </Link>
        </li>
        <hr />
        <li className="">
          <Link
            className="inline-block hover:scale-105 m-5 "
            to="contact"
            onClick={hiddenNav}
          >
            Contact
          </Link>
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default Nav_slide;
