import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { useAuthContext } from '../context/AuthContext';
import LogoutHook from '../hooks/LogoutHook';

const Navbar = () => {
    const { authUser } = useAuthContext()
    const { loading, Logout } = LogoutHook()

    const handleLogout = async (e) => {
        e.preventDefault()
        await Logout()
    }

    return (
        <div className='flex w-full justify-center bg-[#EBD3F8]'>
            <nav className='py-4 w-[90%] flex justify-between items-center '>
                <span className='text-4xl font-semibold tracking-wide'>Mnn<span className='text-[#7A1CAC]'>lr</span></span>

                {!authUser ? <Link to='/login' className='flex items-center gap-2 rounded-full border-2 border-black p-2 px-3'>
                    <FaRegUserCircle className='text-2xl' />
                    Sign in
                </Link> :

                    <div className='flex items-center gap-2 rounded-full border-2 border-black p-2 px-3 group cursor-pointer relative'>
                        <FaRegUserCircle className='text-2xl' />
                        <span>USER</span>
                        <div className='absolute top-[105%] -right-5 hidden group-hover:flex w-28 rounded-md bg-[#818a7e]'>
                            <ul className='w-full text-white'>
                                <li className='py-2 px-3 hover:bg-[#7A1CAC] hover:text-white rounded-md'>Profile</li>
                                <li className={`py-2 px-3 hover:bg-[#7A1CAC] hover:text-white rounded-md ${loading ?'flex justify-center':''}`}
                                    onClick={handleLogout}
                                >{loading ? <div className='loader'></div>:'Log out'}</li>
                            </ul>
                        </div>
                    </div>}

            </nav>
        </div>
    )
}

export default Navbar