import React, { useState, useEffect, useRef } from 'react';
import '../css/LeftSideBar.css';
import { GET_SIDE_NAV_BAR } from "../api/api_list";
import { json, Link } from 'react-router-dom';
import axios from 'axios';

function Section({ heading, items, setMenuActive, menuActive }) {
  return (
    <section>
      <h4 className="title">{heading}</h4>
      <ul>
        {items.map((item, index) => (
          <Link to={`/details/${item.war_id}`}>
            <li
              onClick={() => setMenuActive(!menuActive)}
              key={index}
            >
              {item.war_name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}

const GetSideBar = ({ setMenuActive, menuActive }) => {
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
            setMenuActive={setMenuActive}
            menuActive={menuActive}
            key={war_cat.war_category_id}
            heading={war_cat.name}
            items={war_cat.wars}
          />
        ))
      }
    </>
  );
};

export const LeftSideBar = ({ menuActive, setMenuActive, user }) => {
  return (
    <>
      <menu
        className={`${menuActive ? 'active' : ''}`}
      >
        <header>
          <div>
            <h3>War Memorial</h3>
            <p>{user.email}</p>
          </div>
          <div className="img-box">
            <img src={user.photo}></img>
          </div>
        </header>
        <div id='section-wrapper' className='overflow-y-auto removeScrollBar'>
          <GetSideBar
            setMenuActive={setMenuActive}
            menuActive={menuActive}
          />
        </div>
      </menu>
    </>
  );
};
