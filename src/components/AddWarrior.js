import React, { useState } from 'react'
import Login from './Login'
import MultiStepForm from './form/MultiStepForm'
import { useParams } from 'react-router-dom';

export const AddWarrior = (warid) => {
  const { war_id } = useParams();
  const [isLogin, setIsLogin] = useState(
    Boolean(localStorage.getItem('loginData'))
  );

  return (
    <div className='w-[100%] h-[100%] overflow-y-auto'>
      {isLogin && <MultiStepForm war_id={war_id} /> }
      {!isLogin && <Login setIsLogin={setIsLogin} /> }
    </div>
  )
}
