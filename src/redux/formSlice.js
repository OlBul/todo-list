import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
    name: 'form',
    initialState: {
        signIn: true,
        signUp: false,
    },
    reducers: {
        openSignIn: (state) => {
            state.signIn = !state.signIn
        },
        openSignUp: (state) => {
            state.signUp = !state.signUp
            state.signIn = !state.signIn
        },
    },
})

export const { openSignIn, openSignUp } = formSlice.actions
export default formSlice.reducer
