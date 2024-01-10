"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import TabItem from './TabItem';
import { tabList } from '@/utils/tabsList';

export default function Tabs() {
  const currentPathName = usePathname();

  return (
    <div className="ml-7 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 sm:mx-[1.2rem] relative top-24 sm:top-[4.8rem]">
        <ul className="flex scrollbar-hide overflow-x-scroll -mb-px gap-4">
            {
              tabList.map((item) => <TabItem key={item.id} item={item} currentPathName = {currentPathName}/>)
            }
        </ul>
    </div>
  )
}
