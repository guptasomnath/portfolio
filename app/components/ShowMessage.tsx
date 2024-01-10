import React from 'react'

interface IProps {
    message : string
}

export default function ShowMessage({message} : IProps) {
  return (
    <h3 className='w-full text-center text-lg pt-2 font-semibold text-gray-700'>{message}</h3>
  )
}
