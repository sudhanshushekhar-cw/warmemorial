import '../css/menu.css'
function Section({ heading, items }) {
    return (
        <section>
            <h4 className="title">{heading}</h4>
            <ul>
                {
                    items.map((item) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </section>
    );
}

function Menu() {
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
    ];

    return (
        <menu>
            <header>
                <div>
                    <h3>Menu Header</h3>
                    <p>small content</p>
                </div>
                <div className="img-box"></div>
            </header>
            <div id='section-wrapper'>
                {
                    sections.map(({ heading, items }, i) => {
                        return <Section
                            heading={heading}
                            items={items}
                            key={i}
                        />
                    })
                }
            </div>
        </menu>
    );
}

export default Menu;