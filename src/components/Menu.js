import { Link } from 'react-router-dom';
import '../css/menu.css'
import MenuSection from './MenuSection';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { GET_SIDE_NAV_BAR } from '../api/api_list';



export const Menu = ({ active, setActive }) => {
    const [apiData, setApiData] = useState([]);
    const dummyData = [
        {
            heading: 'section',
            items: ['item1', 'item2', 'item3'],
            war_id: -1,
        },
        {
            heading: 'section',
            items: ['item1', 'item2', 'item3'],
            war_id: -2,
        },
        {
            heading: 'section',
            items: ['item1', 'item2', 'item3'],
            war_id: -3,
        },
    ];
    useEffect(() => {
        axios.get(GET_SIDE_NAV_BAR)
            .then(response => {
                const processData = [];
                response.data.forEach(element => {
                    processData.push({
                        heading: element.name,
                        items: element.wars.map(({war_name, war_id}) =>{ 
                            return {war_name, war_id};
                        })
                    })
                });
                setApiData(processData);
            })
            .catch(err => {
                setApiData(dummyData);
            })
    }, []);
    return (
        <menu className={active ? 'active' : ''}>
            <header>
                <div>
                    <h3>Menu Header</h3>
                    <p>small content</p>
                </div>
                <Link to="/" className="img-box" onClick={() => setActive(false)}></Link>
            </header>
            <div id='section-wrapper'>
                {
                    apiData.map(({ heading, items }, i) => {
                        return <MenuSection
                            heading={heading}
                            items={items}
                            setActive={setActive}
                            key={i}
                        />
                    })
                }
            </div>
        </menu>
    );
}
