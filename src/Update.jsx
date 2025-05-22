import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';

function Update() {
  const inputName=useRef()
  const unputEmail=useRef()
  const [currentUser,setCurrentUser]=useState();
  const param=useParams();
  const users=useSelector(state=>state.users)
  const navigate=useNavigate()
  const dispatsh=useDispatch()
  useEffect(()=>{
   const {id}=param;
   const user = users.find(user => user.id === parseInt(id));
    user?setCurrentUser(user):console.error('User not found');     
  },[])

  const handleSublit=(e)=>{
    e.preventDefault();
    const {id}=param;
    const name= inputName.current.value;
    const email= unputEmail.current.value;
    dispatsh(updateUser({
      id:id,
      name:name,
      email:email
    }))
    navigate('/')

    
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Update User</h3>
        <form onSubmit={handleSublit}  >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              ref={inputName}
              defaultValue={currentUser?.name}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={unputEmail}
              defaultValue={currentUser?.email}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update
