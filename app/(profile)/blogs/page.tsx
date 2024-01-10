import React from "react";
import Posts from "../../components/Posts";
import { GET_BLOGS_API } from "@/constants";

export default function page() {
  return (
    <>
      <Posts url={GET_BLOGS_API} />
    </>
  );
}
