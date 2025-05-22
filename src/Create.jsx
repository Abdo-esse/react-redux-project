import React, {  useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

function Create() {
  const inputName=useRef();
  const inputEmail=useRef();
  const navigate=useNavigate()
  const users=useSelector(state=>state.users)
  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addUser(
      {
        id: users.length > 0 ? users.at(-1).id + 1 : 1,
        name:inputName.current.value,
        email:inputEmail.current.value
      }
    ))
    navigate('/')
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              ref={inputName}
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
              ref={inputEmail}
              id="email"
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

export default Create
