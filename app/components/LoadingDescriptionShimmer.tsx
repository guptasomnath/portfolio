import React from 'react'

export default function LoadingDescriptionShimmer() {
  return (
    <div className='w-full'>
        <div className='w-full h-[1.5rem] mt-2 bg-slate-100 shimmerAnimation'></div>
        <div className='w-full h-[1.5rem] mt-2 bg-slate-100 shimmerAnimation'></div>
        <div className='w-full h-[1.5rem] mt-2 bg-slate-100 shimmerAnimation'></div>
        <div className='w-full h-[1.5rem] mt-2 bg-slate-100 shimmerAnimation'></div>
        <div className='w-1/2 h-[1.5rem] mt-2 bg-slate-100 shimmerAnimation'></div>
    </div>
  )
}
