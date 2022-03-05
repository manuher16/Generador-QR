import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: localStorage.getItem("session") || false,
    token: localStorage.getItem("token") || null,
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        login: (state, action) => {
            state.login = true;
            state.token = action.payload;
            localStorage.setItem("session", true);
            localStorage.setItem("token", action.payload);
        },
        logout: (state, action) => {
            state.login = false;
            state.token = null;
            localStorage.removeItem("session");
            localStorage.removeItem("token");
        }

    }
});
export const { login, logout } = sessionSlice.actions;

export default sessionSlice.reducer;