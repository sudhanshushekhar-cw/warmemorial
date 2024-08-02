import React from 'react'
import { LeftSideBar } from './LeftSideBar'
import { Memorial } from './Memorial'
import Menu from './Menu'

export const Home = () => {
  return (
    <div className='flex'>
        <Menu></Menu>
        <Memorial/>
    </div>
  )
}

