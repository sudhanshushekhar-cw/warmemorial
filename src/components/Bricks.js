import React from 'react'
import { Link } from 'react-router-dom';

export const Bricks = () => {
  const sahidNames = Array(100).fill().map((_, i) => "sahid" + i);
  // sahidNames = [
  //    'veer kuvar singh',
  //    'major ram',
  //    ... so one
  // ]
  return (
    <div id='bricks'>
      <Link to='/add-warrior' className='brick add-warrior'>
        add warrior
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
                <img className='sahid-img hidden' src='http://localhost:3000/assets/1.jpg' alt="Sahid" height={"100%"} width={'100%'} />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
