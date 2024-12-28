import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div className='bg-red-600 p-4'>Please login</div>

    return( <div className='bg-green-700 p-4'> Welcome {user.username}</div>)
}

export default Profile