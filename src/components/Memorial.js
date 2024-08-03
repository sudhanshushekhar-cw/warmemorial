import React from 'react'
import { Bricks } from './Bricks'
import { TfiMenuAlt } from "react-icons/tfi";
export const Memorial = (props) => {
 
    return (
        <div className="container" id='memorial'>
            {/* <div className='flex'>
                <TfiMenuAlt className='text-3xl mt-4 mx-4 md:hidden' onClick={props.toggelSideBarHandler} />
                <div className='text-center w-[100%]'>
                    <div className='text-2xl font-bold m-2 p-2 decoration-4 md:text-3xl'>Kargil War 1999</div>

                </div>
            </div> */}

            <div id='memorial-wall'>
                <Bricks />
            </div>
        </div>

    )
}
