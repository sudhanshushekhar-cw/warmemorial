import React, { useEffect, useState } from 'react'
import { LeftSideBar } from './LeftSideBar'
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Home = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [user, setUser] = useState({
    email: '',
    photo: '',
  });

  useEffect(()=>{
    let loginData = localStorage.getItem('loginData');
    if(loginData){
      loginData = JSON.parse(loginData);
      setUser({
        photo: loginData.photo || '',
        email: loginData.email || '',
      })
    }
  }, [setUser])

  return (
    <>
      <div
        className={`backdrop ${menuActive ? 'active' : ''}`} 
        onClick={()=>setMenuActive(!menuActive)}
      />
      <div id='grid-container'>
        <LeftSideBar
          user={user}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />

        <main>
          <NavBar
            menuActive={menuActive}
            setMenuActive={setMenuActive}
          />
          <Outlet />
        </main>
      </div>
    </>
  )
}

