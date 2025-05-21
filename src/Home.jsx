import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const users=useSelector(state=>state.users)
    console.log(users);
    const displaysers=()=>{
      return users.map((user,key)=>{
        return(
        <tr key={key} className="hover:bg-gray-50">
          <td className="px-6 py-4 text-sm">{user.id}</td>
          <td className="px-6 py-4 text-sm">{user.name}</td>
          <td className="px-6 py-4 text-sm">{user.email}</td>
          <td className="px-6 py-4 text-sm space-x-2">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
              Update
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
              Delete
            </button>
          </td>
        </tr>
      )
      })
    }
    
  return (
    <div className="p-4">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-xl font-bold">User List</h2>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
      Add User
    </button>
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
