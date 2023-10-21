import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        archiveTodo: [],
    },

    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })

            axios
                .post(
                    'https://63ef3bc24d5eb64db0c568de.mockapi.io/todos',
                    action.payload
                )
                .then((res) => {
                    return res.data
                })
        },

        removeTodo(state, action) {
            state.todos.pop({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })

            axios
                .delete(
                    `https://63ef3bc24d5eb64db0c568de.mockapi.io/todos/:id`,
                    action.payload
                )
                .then((res) => {
                    return res.data
                })
                .catch((err) => {
                    console.log(console.log(err))
                })
        },
    },
})

export const { addTodo, removeTodo, addTodoArchive, toggleTodoComplete } =
    todoSlice.actions

export default todoSlice.reducer
