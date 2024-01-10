import Link from "next/link";
import React from "react";

export default function ProfileDetails() {
  return (
    <div className="px-7 sm:px-[1.1rem] relative top-20 sm:top-16">
      <div className="flex items-center justify-between sm:flex-wrap">
        <div className="sm:w-full">
          <h1 className="font-semibold text-slate-800 text-xl">
            Somnath Gupta
          </h1>
          <p className="text-sm text-slate-500">somnathgupta112@gmail.com</p>
        </div>
        <div className="flex sm:pt-3 sm:flex sm:gap-3">
          <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 sm:text-xs"
          >
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1E-1fktTun_Z1t9_Hn-X5ueKFSzCWkJ3I/view"
            >
              My Resume
            </Link>
          </button>
          <button
            type="button"
            className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 sm:text-xs"
          >
            <Link target="_blank" href="mailto:somnathgupta112@gmail.com">
              Contact Me
            </Link>
          </button>
        </div>
      </div>
      <p className="text-[15px] text-slate-900 pt-3">
        Full Stack Developer with expertise in MERN stack (MongoDB, Express.js,
        React, Node.js) and strong JavaScript skills. Familiar with core Java,
        core PHP, and ChatGPT. Seeking new opportunities.
      </p>
    </div>
  );
}
