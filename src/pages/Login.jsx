import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='h-[98vh] flex items-center justify-center'>
            <div className='p-4 w-2/6 rounded bg-gray-800'>
                <div className='text-2xl font-semibold'>Login</div>
                <input type='username' placeholder='username' className='bg-gray-700 px-3 py-2 my-3 w-full rounded' name='username' />
                <input type='password' placeholder='password' className='bg-gray-700 px-3 py-2 my-3 w-full rounded' name='password' />
                <div className='w-full flex items-center justify-between'>
                    <button className='bg-blue-400 text-xl semi-bold text-black px-3 py-2 rounded'>Login</button>
                    <Link to="/signup" className='text-gray-400 hover:text-gray-200'>Not having an accout? Signup here</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
