import React from 'react'
import { Link } from 'react-router-dom';

function MenuSection({ heading, items, setActive }) {
    console.log(items);
    return (
        <section>
            <h4 className="title">{heading}</h4>
            <ul>
                {
                    items.map(({war_name, war_id}, i) => {
                        return (
                            <li
                                key={i}
                                onClick={() => setActive(false)}
                            >
                                <Link to={`details/${war_id}`}>{war_name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

export default MenuSection
