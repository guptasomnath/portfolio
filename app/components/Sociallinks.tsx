import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

export default function Sociallinks() {
  const ICON_SIZE = "20px";
  const ICON_CLASS = "cursor-pointer hover:text-slate-500 transition-all";

  return (
    <div className="flex items-center gap-x-16 sm:gap-x-7">
      <Link target="_blank" href="https://github.com/guptasomnath?tab=repositories">
        <FaGithub size={ICON_SIZE} className={ICON_CLASS} />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/guptasomnath/">
        <FaLinkedin size={ICON_SIZE} className={ICON_CLASS} />
      </Link>
      <Link target="_blank" href="https://guptasomnath.github.io/portfolio/">
        <MdOutlineWeb size={ICON_SIZE} className={ICON_CLASS} />
      </Link>
    </div>
  );
}
