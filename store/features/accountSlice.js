import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
        state.isAuthenticated = true;
        },
    },
});

export const { login} = authSlice.actions;

export default authSlice.reducer;
