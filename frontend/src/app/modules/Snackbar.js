import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false,
    message: '',
    color: "#721b65",
    timeout: 3000,
    top: true,
    bottom: false,
}

export const snackbarSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        showSnackbar: (state, action) => {

            state.show = true
            state.message = action.payload.message
            state.color = action.payload.color
            state.timeout = action.payload.timeout
            if (action.payload.color == 'error') state.color = '#d32f2f'
            if (action.payload.color == 'success') state.color = '#00b894'
            if (action.payload.color == 'warning') state.color = '#ff7675'
            if (action.payload.color == 'info') state.color = '#6c5ce7'

            if (action.payload.top) {
                state.top = true
                state.bottom = false
            }
            if (action.payload.bottom) {
                state.top = false
                state.bottom = true
            }

        },
        hideSnackbar: (state) => {
            state.show = false
        }
    }
});
export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;