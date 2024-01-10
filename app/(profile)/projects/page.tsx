import React from "react";
import Posts from "../../components/Posts";
import { GET_PROJECTS_API } from "@/constants";

export default function Home() {
  return (
    <>
      <Posts url={GET_PROJECTS_API} />
    </>
  );
}
