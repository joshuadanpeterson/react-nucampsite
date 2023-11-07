import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return { ...state, currentUser: action.payload }; 
        },
    },
});

export const { setCurrentUser } = userSlice.actions;

export const useReducer = userSlice.reducer;

export const selectCurrentUser = (state) => state.user.currentUser;