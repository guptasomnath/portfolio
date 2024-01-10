import Image from 'next/image';
import React from 'react';
import notFoundSvg from "@/public/not_found_svg.svg";

export default function NotFound() {
  return (
    <div className='w-full min-h-[80%] flex items-center justify-center flex-col'>
       <Image src={notFoundSvg} alt='not-found-image' height={250}/>
       <h1 className='font-semibold pt-5 text-2xl text-gray-600'>404 Page Not Found</h1>
    </div>
  )
}
