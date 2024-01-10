import React from 'react';
import UserImage from './UserImage';

export default function ProfileIcon() {
  return (
    <div className="w-40 h-40 shadow-lg absolute bg-white rounded-full p-1 border -bottom-16 ml-7 sm:-bottom-12 sm:h-20 sm:w-20 sm:ml-3">
      <UserImage extraClass="h-full w-full shadow-md"/>
    </div>
  )
}
