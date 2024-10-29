import React from 'react'

export const EditProfileForm = ({ user, toggleEditing }) => {

    return (
        <div className='flex items-center justify-center absolute top-0 left-0 h-screen w-full bg-black bg-opacity-60'>
            <div className='bg-white py-2 px-3 rounded-md'>
                Hello <button onClick={toggleEditing}>close</button>
            </div>
        </div>
    )
}
