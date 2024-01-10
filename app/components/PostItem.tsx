import React from "react";
import Image from "next/image";
import UserImage from "./UserImage";
import { PostsResponseType } from "@/config/types";
import PostDescription from "./PostDescription";
import { calculateDate } from "@/utils/calculateDate";

interface IProps {
  data: PostsResponseType;
}

export default function PostItem({ data }: IProps) {
  const date = calculateDate(data.date);

  return (
    <li className="w-[41rem] flex py-4 border-b-[1px] sm:w-full xmd:w-full ">
      {/* left layout */}
      <UserImage extraClass="h-12 w-12 cursor-pointer shadow-md sm:h-8 sm:w-8" />
      {/* right layout */}
      <div className="px-3 customFullWidth">
        <div className="flex items-center gap-3 text-gray-700">
          <h1 className="font-semibold">Somnath Gupta</h1>
          <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
          <p title={data.date} className="text-sm">
            {date}
          </p>
        </div>
        <p className="text-slate-700 text-sm font-[550]">
          {data.shortdescription}
        </p>
        <div>
          <h2 className="font-semibold text-slate-700 pt-3">{data.title}</h2>
          <PostDescription description={data.longdescription} />
          {data.imageUrl.trim() === "" ? (
            ""
          ) : (
            <Image
              src={data.imageUrl}
              alt="test"
              height={1000}
              width={1000}
              quality={100}
              className="aspect-video w-full mt-3"
              priority
            />
          )}
        </div>
      </div>
    </li>
  );
}
