import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GET_WARRIOR_BY_WARID } from '../api/api_list'
import axios from 'axios';
import {useLoaderData} from 'react-router-dom'

export const loadMemorial = async({params}) => {
  const {war_id} = params;
  try {
    const response = await axios.post(GET_WARRIOR_BY_WARID, {war_id});
    return response.data;
  } catch (error) {
    return error;
  }
}
function Memorial() {
  const dummyData = Array(100).fill().map((_, i) => {
    return {
      about: "",
      alias_name: "",
      created_at: "2024-08-04",
      is_approved: 0,
      is_family: 0,
      martyr_id: i,
      name: `Dummy ${i}`,
      photo: "",
      post: "",
      unit: "",
      user_id: 0,
      war_id: 2,
      isDummy: true
    };
  });
  const data = useLoaderData();
  const renderData = Array.isArray(data)? data : dummyData;
  
  return (
    <div id='memorial'>
      <Link to='/add-warrior' className='brick add-warrior'>
        add warrior
      </Link>
      {
        renderData.map(({martyr_id, name, isDummy}) => {
          return (
            <div className={`brick ${isDummy? 'dummy' : ''}`} key={martyr_id} >
              <span className='icon'>
                <img src='http://localhost:3000//assets/wreath.png'></img>
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
export default Memorial;

