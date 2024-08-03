import React, { useState } from 'react'
import { LeftSideBar } from './LeftSideBar'
import { Memorial } from './Memorial'
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Home = () => {
  const [isSideBar, setSideBar] = useState(false);
  const toggelSideBarHandler = () => {
    setSideBar(!isSideBar);
  }
  return (
    <div className='flex' id='home'>
      <LeftSideBar isSideBar={isSideBar} toggelSideBarHandler={toggelSideBarHandler} />
      <div className='flex flex-col w-[100%]'>
        <Header toggelSideBarHandler={toggelSideBarHandler} />
        <Outlet />
      </div>

    </div>
   
  )
}

