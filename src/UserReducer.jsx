import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice=createSlice({
    name:"users",
    initialState: userList ,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)    
        },
        updateUser:(state,action)=>{
           const user= state.find(user=>user.id===parseInt(action.payload.id))
           user.email=action.payload.email;
           user.name=action.payload.name
           
        }
    }
})

export const {addUser,updateUser}=userSlice.actions
export default userSlice.reducer