import React, { useState, useEffect } from 'react';
import '../css/LeftSideBar.css';
import { GET_SIDE_NAV_BAR } from "../api/api_list";
import { json, Link } from 'react-router-dom';
import axios from 'axios';

function Section({ heading, items }) {
  return (
    <section>
      <h4 className="title">{heading}</h4>
      <ul>
        {items.map((item, index) => (
          <Link to={`/details/${item.war_id}`}>
            <li key={index}>
              {item.war_name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

const GetSideBar = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(GET_SIDE_NAV_BAR);
        const result = response.data;
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
      {
        data.map((war_cat) => (
          <Section
            key={war_cat}
            heading={war_cat.name}
            items={war_cat.wars}
          />
        ))
      }
    </>
  );
};

export const LeftSideBar = ({ isSideBar }) => {
  const classes = isSideBar ?
    'w-[70%] z-20 absolute md:w-[23%] md:relative' :
    'hidden z-10 md:w-[23%] md:block'

  const loginData = localStorage.getItem('loginData');
  let photo = '';
  let email = '';
  if(loginData){
    ({photo, email} = JSON.parse(loginData))
  }
  return (
    <>
      <div className={classes}>
        <menu>
          <header>
            <div>
              <h3>War Memorial</h3>
              <p>{email}</p>
            </div>
            <div className="img-box">
              <img src={photo}></img>
            </div>
          </header>
          <div id='section-wrapper' className='overflow-y-auto removeScrollBar'>
            <GetSideBar />
          </div>
        </menu>
      </div>
    </>
  );
};
