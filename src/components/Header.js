import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
export const Header = (props) => {
    return (

        <div className='flex'>
            <TfiMenuAlt className='z-20 text-3xl mt-4 mx-4 md:hidden' onClick={props.toggelSideBarHandler} />
            <div className='text-center w-[100%]'>
                <div className='text-2xl font-bold m-2 p-2 decoration-4 md:text-3xl'>Kargil War 1999</div>

            </div>
        </div>
    )
}
