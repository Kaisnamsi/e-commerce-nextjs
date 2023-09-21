import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    id:"",
    email:"",
    name:"",
    mobile:"",
    role:"",
    country:"",
    access:""
}

const auth = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        createAuth:(state,action)=>{
            state.id=action.payload._id;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.mobile = action.payload.mobile;
            state.role = action.payload.role;
            state.country = action.payload.country;
            state.access = action.payload.token
        },
        removeAuth:(state,action)=>{
            state.id="";
            state.email = "";
            state.name = "";
            state.mobile = "";
            state.role = "";
            state.country = "";
            state.password = "";
            state.access = ""
        }
    }

})
export default auth.reducer
export const {createAuth,removeAuth}=auth.actions
export const getAuth = (state) => state.auth