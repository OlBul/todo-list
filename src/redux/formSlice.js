import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
    name: 'form',
    initialState: {
        signIn: true,
        signUp: false,
        closeForm: false,
    },
    reducers: {
        openSignIn: (state) => {
            state.signIn = !state.signIn
            state.closeForm = !state.closeForm
        },
        openSignUp: (state) => {
            state.signUp = !state.signUp
            state.signIn = !state.signIn
            state.closeForm = !state.closeForm
        },
    },
})

export const { openSignIn, openSignUp } = formSlice.actions
export default formSlice.reducer
