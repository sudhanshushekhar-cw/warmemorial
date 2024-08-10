import React from 'react'
import Login from './Login'
import MultiStepForm from './form/MultiStepForm'
import { useParams } from 'react-router-dom';

export const AddWarrior = (warid) => {
  const { war_id } = useParams(); 
  return (
    <div className='w-[100%] h-[100%] overflow-y-auto'>
     
    <MultiStepForm war_id={war_id}/>
    <Login/>
    </div>
  )
}
