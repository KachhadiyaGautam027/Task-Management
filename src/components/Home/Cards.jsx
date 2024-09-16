import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";

const Cards = ({ home, setInputDiv }) => {
    const data = [
        {
            title: "The Best Coding",
            desc: "I have to create my project the best coding",
            status: "In Complete",
        },
        {
            title: "CPP concepts",
            desc: "I need to clear basics of Cpp. Topics:Abstractin,Inheritance, Polymorphis, virtual functions etc. ",
            status: "Complete",
        },
        {
            title: "Assignment",
            desc: "my assignment on 20 march. I have to complete it. ",
            status: "In Complete",
        },
        {
            title: "Projects",
            desc: "For Project i need to see tutorials of the code master. ",
            status: "In Complete",
        },
    ];

    const [ImportantButton, setImportantButton] = useState("Incomplete")

    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {data && data.map((items, i) => (
                <div className='flex flex-col justify-between bg-gray-800 rounded-sm p-4'>
                    <div>
                        <h3 className='text-xl font-semibold'>{items.title}</h3>
                        <p className='text-gray-300 my-2'>{items.desc}</p>
                    </div>
                    <div className='mt-4 w-full flex items-center'>
                        <button className={`${items.status === "In Complete" ? "bg-red-400" : "bg-green-700"} p-2 rounded`}>
                            {items.status}
                        </button>
                        <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                            <button><CiHeart /></button>
                            <button><FaEdit /></button>
                            <button><MdDelete /></button>
                        </div>
                    </div>
                </div>
            ))}
            {home === "true" && (
                <button className='flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300' onClick={() => setInputDiv("fixed")}>
                    <IoAddCircleSharp className='text-5xl' />
                    <h2 className='text-2xl mt-4'>Add Task</h2>
                </button>
            )}

        </div>
    )
}

export default Cards
