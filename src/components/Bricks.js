import React from 'react'
import '../css/utils.css'

export const Bricks = () => {
  const sahidNames = Array(200).fill().map((_, i) => "sahid" + i);
  // sahidNames = [
  //    'veer kuvar singh',
  //    'major ram',
  //    ... so one
  // ]
  return (
    <div id='bricks'>
      {
        sahidNames.map((name, i) => {
          return (
            <div className='brick' key={i} >
              <span className='icon'>
                <img src='./assets/wreath.png'></img>
              </span>
              <span className='sahid-name'>{name}</span>
             <div className='sahid-img hidden'>
                <img className='sahid-img hidden' src='./assets/1.jpg' height={"100%"}  width={'100%'}/>
             </div>
            </div>
          );
        })
      }
    </div>
  );
}
