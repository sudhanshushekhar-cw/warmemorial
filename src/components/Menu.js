import { Link } from 'react-router-dom';
import '../css/menu.css'
function Section({ heading, items, setActive }) {
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
                <Link to="/" className="img-box"></Link>
            </header>
            <div id='section-wrapper'>
                {
                    sections.map(({ heading, items }, i) => {
                        return <Section
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
