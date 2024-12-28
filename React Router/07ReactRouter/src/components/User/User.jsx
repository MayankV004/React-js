import React from 'react'
import { useParams } from 'react-router-dom'
function User () {
    const {userid} = useParams()
  return (
    <div className='bg-green-700 flex p-5 justify-center text-white text-xl'>User: {userid} </div>
  )
}

export default User