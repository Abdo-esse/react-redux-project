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
           
        },
        deleteUser:(state,action)=>{
           const user= state.find(user=>user.id===parseInt(action.payload.id))
           if(user){
            return state.filter(user=>user.id!==parseInt(action.payload.id))
           }else{
            console.log("user not found");            
           }
           
        }
    }
})

export const {addUser,updateUser,deleteUser}=userSlice.actions
export default userSlice.reducer