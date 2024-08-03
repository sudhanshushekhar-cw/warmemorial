import React from 'react'
import '../css/LeftSideBar.css'
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
export const LeftSideBar = () => {
  const sections = [
    {
      heading: 'Post-Independence',
      items: [
        'Indo-Pakistani War of 1947-1948',
        'Indo-Pakistani War of 1965 ',
        'Indo-Pakistani War of 1971',
        'Sino-Indian War (1962)',
        'Kargil War (1999)'
      ]
    },
    {
      heading: 'section 1',
      items: [
        'content 0',

      ]
    },
    {
      heading: 'section 2',
      items: [
        'content 0',

      ]
    },
  ];

  return (
    <div className='w-[23%] hidden md:block' >
      <menu className='hidden md:block'>
            <header>
                <div>
                    <h3>War Memorial</h3>
                    <p>Our India</p>
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
    </div>
  )
}
