import Link from "next/link";
import React from "react";

type ItemType = {
    href : string;
    name : string;
}
interface IProps {
    item : ItemType,
    currentPathName : string
}

export default function TabItem({ item, currentPathName } : IProps) {
  const selectedTabClass = currentPathName.replaceAll("projects", "") === item.href ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500 border-b-[3px]" : "";
  return (
    <li className="me-2">
      <Link
        href={item.href === "/" ? "/projects" : item.href}
        className={`inline-block text-sm text-center font-semibold pt-4 pb-2 px-4 rounded-t-lg active sm:px-1 ${selectedTabClass}`}
        aria-current="page"
      >
        {item.name}
      </Link>
    </li>
  );
}
