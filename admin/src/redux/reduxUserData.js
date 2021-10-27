import {createSlice} from '@reduxjs/toolkit';
const usersDataSlice = createSlice({
    name: "userdata",
    initialState: { 
        users: [],
        isFetching: false,
        error: false
    },
    reducers: {
        // Get User
        getUserStart: (state) =>{
            state.isFetching=true;
            state.error=false;
        },
        getUserSuccess: (state, action) =>{
            state.isFetching=false;
            state.users=action.payload;
        },
        getUserFailure: (state) =>{
            state.isFetching=false;
            state.error=true;
        },
         // Delete User
        deleteUserStart: (state) =>{
            state.isFetching=true;
            state.error=false;
        },
        deleteUserSuccess: (state, action) =>{
            state.isFetching=false;
            state.users.splice(
                state.users.findIndex(item => item._id === action.payload),1
            );
        },
        deleteUserFailure: (state) =>{
            state.isFetching=false;
            state.error=true;
        },
         // Update User
        updateUserStart: (state) =>{
            state.isFetching=true;
            state.error=false;
        },
        updateUserSuccess: (state, action) =>{
            state.isFetching=false;
            state.users[
                state.users.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.User;
        },
        updateUserFailure: (state) =>{
            state.isFetching=false;
            state.error=true;
        },
         // Add User
        addUserStart: (state) =>{
            state.isFetching=true;
            state.error=false;
        },
        addUserSuccess: (state, action) =>{
            state.isFetching=false;
            state.users.push(action.payload)
        },
        addUserFailure: (state) =>{
            state.isFetching=false;
            state.error=true;
        }
    }
})
export const {
    getUserStart, 
    getUserSuccess, 
    getUserFailure, 
    deleteUserStart, 
    deleteUserSuccess, 
    deleteUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    addUserStart,
    addUserSuccess,
    addUserFailure
} = usersDataSlice.actions;
export default usersDataSlice.reducer; 