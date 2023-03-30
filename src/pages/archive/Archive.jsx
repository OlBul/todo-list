import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector } from 'react-redux'
import Note from '../../components/notes/Note'
import { Button } from 'react-bootstrap'
//import ListGroup from 'react-bootstrap/ListGroup'
import { useDispatch } from 'react-redux'
import { toggleTodoComplete, removeTodo, addTodo } from '../../redux/todoSlice'
//import Note from '../components/Note'

const Archive = ({
    setShow,
    alertMessage,
    show,
    setAlertMessage,
    id,
    text,
    setText,
    commpleted,
}) => {
    const todos = useSelector((state) => state.todos.todos)

    const archiveTodos = useSelector((state) => state.todos.archiveTodos)
    const dispatch = useDispatch()

    return (
        <ListGroup variant="flush" className="notes">
            {archiveTodos?.map((todo) => (
                <Note
                    text={todo.text}
                    key={todo.id}
                    setShow={setShow}
                    {...todo}
                />
            ))}
        </ListGroup>
    )
}

export default Archive
