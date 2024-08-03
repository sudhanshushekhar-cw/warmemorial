import React from 'react'
import { Bricks } from './Bricks'

export const Memorial = () => {
    return (
        <div className="container" id='memorial'>
            <div className='text-2xl font-bold m-2 p-2 decoration-4 md:text-3xl'>Kargil War 1999</div>
            <div id='memorial-wall'>
                <Bricks/>
            </div>
           
         </div>

    )
}
