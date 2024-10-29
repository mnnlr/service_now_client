import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { EditProfileForm } from './EditProfileForm';

export const ProfilePage = ({ user }) => {

    const [editing, setEditing] = React.useState(false)

    const date = new Date(user.createdAt).toLocaleString('en-IN', { day: "numeric", month: 'long', year: 'numeric' })

    const toggleEditing = () => {
        setEditing(!editing);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
            {/* Profile Card */}
            <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-8 relative">
                {/* User Icon */}
                <div className="flex flex-col items-center mb-6">
                    {user?.avatar || (
                        <FaUserCircle className="text-gray-400 text-9xl shadow-md rounded-full p-2 bg-gray-200" />
                    )}
                </div>

                {/* User Information */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-extrabold text-gray-800">{user.name}</h1>
                    <p className="text-lg font-medium text-gray-500 mt-2">{user.role}</p>
                </div>

                {/* Account Info */}
                <div className="text-lg text-gray-600 space-y-4 mb-6">
                    <p>
                        <span className="font-semibold text-gray-700">User: </span>
                        {user.name}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Email: </span>
                        {user.email}
                    </p>
                    <p>
                        <span className="font-semibold text-gray-700">Account Created At: </span>
                        {date}
                    </p>
                </div>

                {/* Edit Button */}
                {/* <div className="flex justify-center">
                    <button
                        onClick={toggleEditing}
                        className="bg-green-600 hover:bg-green-700 duration-300  text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    >
                        {editing ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div> */}


            </div>

            {/* Edit Profile Form */}
            {/* {editing && (
                <div className="mt-8">
                    <EditProfileForm user={user} toggleEditing={toggleEditing} />
                </div>
            )} */}
        </div>
    )
}
