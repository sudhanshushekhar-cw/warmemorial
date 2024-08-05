import { Link } from 'react-router-dom';
import '../css/menu.css'
import MenuSection from './MenuSection';


export const Menu = ({ active, setActive }) => {
    const sections = [
        {
            heading: 'section 0',
            items: [
                'hello world',
                'then ',
                'they have',
            ]
        },
        {
            heading: 'section 1',
            items: [
                'content 0',
                'content 1',
                'content 2',
            ]
        },
        {
            heading: 'section 2',
            items: [
                'content 0',
                'content 1',
                'content 2',
            ]
        },
        {
            heading: 'section 2',
            items: [
                'content 0',
                'content 1',
                'content 2',
            ]
        },
        {
            heading: 'section 2',
            items: [
                'content 0',
                'content 1',
                'content 2',
            ]
        },
        {
            heading: 'section 2',
            items: [
                'content 0',
                'content 1',
                'content 2',
            ]
        },
    ];

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
                    sections.map(({ heading, items }, i) => {
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
