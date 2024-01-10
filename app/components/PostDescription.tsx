"use client";

import React, { useEffect, useRef, useState } from "react";
import LoadingDescriptionShimmer from "./LoadingDescriptionShimmer";

interface IProps {
  description: string;
}

export default function PostDescription({ description }: IProps) {
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const [isUiLoaded, setIsUiLoaded] = useState(false);
  const [isExpand, setIsExpand] = useState(true);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.innerHTML = description;
    }
    setIsUiLoaded(true);

    return () => {};
  }, [isUiLoaded]);

  const handleShowMoreBtn = () => {
    setIsExpand(!isExpand);
  };

  const descriptionHeight = !isExpand ? "h-auto" : "h-20";
  const expandBtntext = !isExpand ? "Show Less.." : "Show More..";

  return (
    <>
      {!isUiLoaded ? (
        <LoadingDescriptionShimmer />
      ) : (
        <>
          <div
            ref={descriptionRef}
            className={`text-[0.980rem] pt-3 text-slate-500 w-full descriptionText ${descriptionHeight} overflow-hidden`}
          ></div>
          <button
            onClick={handleShowMoreBtn}
            className="text-sm cursor-pointer text-blue-500"
          >
            {expandBtntext}
          </button>
        </>
      )}
    </>
  );
}
