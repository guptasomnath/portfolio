import Image from 'next/image'
import React from 'react'
import profileImage from "@/public/profile_image.jpg";

interface IProps {
    extraClass : string
}

export default function UserImage({extraClass} : IProps) {
  return (
    <>
     <Image src={profileImage} alt='user-profile-image' className={`rounded-full ${extraClass}`}/>
    </>
  )
}
