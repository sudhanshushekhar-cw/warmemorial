import React from 'react';
import '../css/utils.css';
import { IoMdAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

export const Bricks = ({ data , war_id}) => {
  // Define dummyData
  const dummyData = Array(200).fill().map((_, i) => {
    return {
      about: "",
      alias_name: "",
      created_at: "2024-08-04",
      is_approved: 0,
      is_family: 0,
      martyr_id: i,
      name: `Sahid${i}`,
      photo: "",
      post: "",
      unit: "",
      user_id: 0,
      war_id: 2,
    };
  });

  // Determine the data to use
  const renderData = (data) ? (data.error ? dummyData : data) : dummyData;
  //summary
  // if(data){
  //   renderData = (data.error)? dummyData : data;
  // }
  // else{
  //   rendarData = dummyData;
  // }

  return (
    <div id='bricks'>
      <Link to={`/addwarrior/${war_id}`}>
        <div className='rounded-lg text-center cursor-pointer h-[100%]' style={{ backgroundColor: "#ffffff78", boxShadow: "none" }} >
          <span className='flex justify-center items-center pt-3 pl-1'>
            <IoMdAddCircle className='text-4xl' />Add Warrior
          </span>
        </div>
      </Link>

      {
        renderData.map((e) => (
          <div className='brick' key={e.martyr_id}>
            <span className='icon'>
              <img src='http://localhost:3000/assets/wreath.png' alt="Wreath" />
            </span>
            <span className='sahid-name'>{e.name}</span>
            <div className='sahid-img hidden'>
              <img className='sahid-img hidden' src='http://localhost:3000/assets/1.jpg' alt="Sahid" height={"100%"} width={'100%'} />
            </div>
          </div>
        ))
      }
    </div>
  );
}
