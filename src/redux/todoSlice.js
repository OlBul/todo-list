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
            //localStorage.setItem('todo', JSON.stringify(state.todos))
        },

        removeTodo(state, action) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            )
            /*   state.archiveTodo.push({
                id: state.id,
                text: state.text,
                completed: false,
            }) */
        },
        addTodoArchive(state, action) {
            state.archiveTodo.push({
                id: state.todos.id,
                text: state.todos.text,
                completed: false,
            })
        },
        toggleTodoComplete(state, action) {
            const toggleTodo = state.todos.find(
                (todo) => todo.id === action.payload.id
            )
            toggleTodo.completed = !toggleTodo.completed
        },
    },
})

export const { addTodo, removeTodo, addTodoArchive, toggleTodoComplete } =
    todoSlice.actions

export default todoSlice.reducer
