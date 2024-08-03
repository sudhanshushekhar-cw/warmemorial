import React, { act, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu } from './components/Menu'

function Layout() {
    const [active, setActive] = useState(false);
    const events = [
        { text: 'memorial', href: '/' },
        { text: 'wars', href: '/wars' },
        { text: 'blogs', href: '/blogs' },
    ];
    return (
        <div className='grid-container'>
            <div className={`backdrop ${active ? 'active' : ''}`} onClick={() => setActive(false)}></div>
            <Menu active={active} setActive={setActive}></Menu>

            {/* main jisme ek header hoga (you can adjust item) */}
            {/* and isme ek  placeholder hoga <Outlet>*/}
            <main>
                <header>
                    <div className='flex items-center gap-4'>
                        <i className="uil uil-bars hamburger" onClick={() => setActive(true)}></i>
                        <h2>
                            <Link to="/">LOGO</Link>
                        </h2>
                    </div>
                    <div className='events'>
                        {
                            events.map(({ text, href }) => {
                                return (
                                    <Link
                                        className='event'
                                        to={href}
                                        key={text}
                                    >{text}</Link>
                                );
                            })
                        }
                    </div>
                </header>

                {/* 
                    Outlet is a placeholder in the main where the child routes' components will be injected based on the current URL.
                */}
                <Outlet />
            </main>
        </div >
    )
}

export default Layout