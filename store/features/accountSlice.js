import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.loading = true;
            state.error = null;
            state.isAuthenticated = false;
        },
    },
});

export const { login} = authSlice.actions;

export default authSlice.reducer;
