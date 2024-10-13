import React from 'react'
import { MdCropSquare, MdOutlineStarBorder } from 'react-icons/md'

const Email = () => {
    return (
        <div className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md '>
            <div className='flex items-center gap-2'>

                <div className='text-gray-400'>
                    <MdCropSquare size={'20px'} />
                </div>
                <div className='text-gray-400'>
                    <MdOutlineStarBorder size={'20px'} />
                </div>

                <div>
                    <h1 className='font-semibold'>Keshav Tiwari</h1>
                </div>
            </div>
            <div className='flex-1 ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, eligendi natus. Nemo modi illo tenetur?</div>
            <div className=' flex-none text-gray text-sm '>
                <p>12 days ago</p>
            </div>
        </div>
    )
}

export default Email