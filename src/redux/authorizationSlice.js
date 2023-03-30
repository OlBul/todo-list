import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: '',
    email: '',
    password: '',
    form: '',
}

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        changeLogin: (state, action) => {
            state.login = action.payload
        },
    },
    changeEmail: (state, action) => {
        state.email = action.payload
    },
    changePassword: (state, action) => {
        state.password = action.payload
    },
    formToggle: {},
})
