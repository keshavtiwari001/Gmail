import React from 'react'
import { IoMdTime } from 'react-icons/io';
import { LuPencil } from "react-icons/lu";
import { MdInbox, MdKeyboardArrowDown, MdOutlineStarRate } from "react-icons/md";
import { IoDocumentOutline, IoSendSharp } from "react-icons/io5";

const sidebarItems = [
    {
        icon: <MdInbox size={'20px'} />,
        text: "Inbox"
    },
    {
        icon: <MdOutlineStarRate size={'20px'} />,
        text: "Starred"
    },
    {
        icon: <IoMdTime size={'20px'} />,
        text: "Snoozed"
    },
    {
        icon: <IoSendSharp size={'20px'} />,
        text: "Sent"
    },
    {
        icon: <IoDocumentOutline size={'20px'} />,
        text: "Drafts"
    },
    {
        icon: <MdKeyboardArrowDown size={'20px'} />,
        text: "More"
    },
]

const Sidebar = () => {
    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button className='flex items-center gap-2 bg-[#c2e7ff] p-4 rounded-2xl hover:shadow-md'>
                    <LuPencil size={'20px'} />
                    Compose
                </button>
            </div>

            {/* mapping */}
            <div className='text-gray-500'>
                {
                    sidebarItems.map((item, index) => {
                        return (
                            <div className='flex items-center pl-6 py-1 rounded-r-full gap-4 my-2 hover:cursor-pointer hover:bg-gray-200'>
                                {item.icon}
                                <p>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar