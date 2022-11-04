import { useState } from 'react'
import { Container } from 'react-bootstrap'
import AlertMassedge from '../components/AlertMassedge'
import FormNote from '../components/FormNote'
import Note from '../components/Note'
import Notes from '../components/Notes'

const Home = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')
    const [show, setShow] = useState(false)
    const [alertMessage, setAlertMessage] = useState({
        message: '',
    })

    const addTodo = (e) => {
        e.preventDefault()
        setShow(() => ({ show: true }))
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false,
                },
            ])
            setAlertMessage((prevState) => ({
                ...prevState,
                message: 'Note added!',
            }))
        } else {
            setAlertMessage((prevState) => ({
                ...prevState,
                message: 'Enter text for note!',
            }))
        }
        setText('')
    }

    const removeTodo = (todoId) => {
        setShow(() => ({ show: true }))
        setTodos(todos.filter((todo) => todo.id !== todoId))
        setAlertMessage((prevState) => ({
            ...prevState,
            message: 'Note deleted!',
        }))
    }

    const toggleTodoComplete = (todoId) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id !== todoId) return todo

                return {
                    ...todo,
                    complited: !todo.complited,
                }
            })
        )
    }

    return (
        <>
            <Container className="main">
                <AlertMassedge
                    show={show}
                    setShow={setShow}
                    alertMessage={alertMessage}
                    addTodo={addTodo}
                />
                <FormNote
                    show={show}
                    setShow={setShow}
                    setAlertMessage={setAlertMessage}
                    text={text}
                    setText={setText}
                    todos={todos}
                    addTodo={addTodo}
                />
                <Notes
                    todos={todos}
                    removeTodo={removeTodo}
                    toggleTodoComplete={toggleTodoComplete}
                />
            </Container>
        </>
    )
}

export default Home
