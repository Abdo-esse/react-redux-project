import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

function Home() {
  
    const users=useSelector(state=>state.users)
    const dispath=useDispatch();
    const displaysers=()=>{
      return users.map((user,key)=>{
        return(
        <tr key={key} className="hover:bg-gray-50">
          <td className="px-6 py-4 text-sm">{user.id}</td>
          <td className="px-6 py-4 text-sm">{user.name}</td>
          <td className="px-6 py-4 text-sm">{user.email}</td>
          <td className="px-6 py-4 text-sm space-x-2">
            <Link to={`/update/${user.id}`} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
              Update
            </Link>
            <button onClick={()=>handledelete(user.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
              Delete
            </button>
          </td>
        </tr>
      )
      })
    }

    const handledelete=(id)=>{
      dispath(deleteUser({
        id:id
      }))
      
    }
    
  return (
    <div className="p-4">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold">User List</h2>
    <Link to="/creat"  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
      Add User
    </Link >
  </div>

  <div className="overflow-x-auto shadow rounded-lg">
    <table className="min-w-full divide-y divide-gray-200 bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">ID</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">

        {displaysers()}
        
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Home
