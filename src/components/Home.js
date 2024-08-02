import React from 'react'
import { LeftSideBar } from './LeftSideBar'
import { Memorial } from './Memorial'

export const Home = () => {
  return (
    <div className='flex'>
        <LeftSideBar/>
        <Memorial/>
    </div>
  )
}

