"use client";

import React from "react";
import PostItem from "./PostItem";
import { PostsResponseType } from "@/config/types";
import ShowMessage from "./ShowMessage";
import Spinner from "./Spinner";
import { useQuery } from "@/hooks/useQuery";

interface IProps {
  url: string;
}

export default function Posts({ url }: IProps) {
  const { isLoading, error, response } = useQuery<PostsResponseType[]>(url);

  if (error) {
    return (
      <div className="h-[300px]">
        <ShowMessage message={error.message} />
      </div>
    );
  }

  if (response?.length === 0) {
    return (
      <div className="h-[300px]">
        <ShowMessage message={`There is no data available`} />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-[300px] flex items-start justify-center pt-3">
        <Spinner />
      </div>
    );
  }

  return (
    <ul>
      {response?.map((item, index) => (
        <PostItem key={index} data={item} />
      ))}
    </ul>
  );
}
