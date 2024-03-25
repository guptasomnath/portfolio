import React from 'react';
import Sociallinks from './Sociallinks';
import Image from 'next/image';
import bannerImage from "@/public/banner_img.jpeg";

export default function BannerImage() {
  // const SRC = "https://media.licdn.com/dms/image/D4D16AQGtUOFW6FUYeA/profile-displaybackgroundimage-shrink_350_1400/0/1687939461771?e=1710374400&v=beta&t=0KgwfSHGmIrONSaWlNs7v6zbu2zpwrQHQvi4kuysKUM";
  return (
    <div className='relative'>
      <Image src={bannerImage} alt='banner-image' height={396} width={1584} priority/>
      <div className='px-4 py-2 pt-4 rounded-t-xl bg-[#f2f6fa98] absolute right-0 bottom-0 sm:-bottom-12 sm:bg-transparent'>
        <Sociallinks />
      </div>
    </div>
  )
}
