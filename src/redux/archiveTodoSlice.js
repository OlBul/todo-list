import { createSlice } from '@reduxjs/toolkit'

const archiveTodoSlice = createSlice({
    name: 'archiveTodos',
    initialState: {
        archiveTodos: [],
    },
    reducers: {
        addTodoArchive(state, action) {
            state.archiveTodos?.push({
                /*  id: new Date().toISOString(),
                text: action.payload.text,
                completed: false, */
            })
        },
        removeTodoArchive(state, action) {
            state.archiveTodos = state.archiveTodos.filter(
                (todo) => todo.id !== action.payload.id
            )
        },
    },
})

export const { removeTodoArchive, addTodoArchive } = archiveTodoSlice.actions

export default archiveTodoSlice.reducer
