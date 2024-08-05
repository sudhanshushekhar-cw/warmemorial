import React from 'react'

function MenuSection({ heading, items, setActive }) {
    return (
        <section>
            <h4 className="title">{heading}</h4>
            <ul>
                {
                    items.map((item) => {
                        return <li
                            key={item}
                            onClick={() => setActive(false)}
                        >{item}</li>
                    })
                }
            </ul>
        </section>
    );
}

export default MenuSection
