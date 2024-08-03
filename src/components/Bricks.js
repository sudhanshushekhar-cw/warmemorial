import React from 'react'
import '../css/utils.css'
import { IoMdAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
export const Bricks = () => {

  const sahidNames = Array(200).fill().map((_, i) => "sahid" + i);
  // sahidNames = [
  //    'veer kuvar singh',
  //    'major ram',
  //    ... so one
  // ]
  return (
    <div id='bricks'>
      <Link to="/addwarrior">
        <div className='rounded-lg text-center cursor-pointer h-[100%]' style={{backgroundColor:"#ffffff78", boxShadow:"none"}} >
          <span className='flex justify-centerj items-center  pt-3 pl-1'><IoMdAddCircle className='text-4xl' />Add Warrior</span>
        </div>
      </Link>
    
      {
        sahidNames.map((name, i) => {
          return (
            <div className='brick' key={i} >
              <span className='icon'>
                <img src='./assets/wreath.png'></img>
              </span>
              <span className='sahid-name'>{name}</span>
              <div className='sahid-img hidden'>
                <img className='sahid-img hidden' src='./assets/1.jpg' height={"100%"} width={'100%'} />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
