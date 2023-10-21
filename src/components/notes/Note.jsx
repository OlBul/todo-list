import React from 'react'
import { Button } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { useDispatch } from 'react-redux'
import { toggleTodoComplete, removeTodo } from '../../redux/todoSlice'

const Note = ({ setShow, setAlertMessage, id, text, commpleted }) => {
    const dispatch = useDispatch()

    const removeTask = () => {
        setShow(() => ({ show: true }))
        dispatch(removeTodo({ id }))
        setAlertMessage((prevState) => ({
            ...prevState,
            message: 'Note deleted!',
        }))
    }

    return (
        <>
            <ListGroup.Item className="list-group-item note">
                <input
                    type="checkbox"
                    checked={commpleted}
                    onChange={() => dispatch(toggleTodoComplete({ id }))}
                />
                <strong className="todo-text">{text}</strong>
                <small className="todo-date">
                    {new Date().toLocaleDateString()}
                </small>
                <Button variant="outline-danger btn-sm" onClick={removeTask}>
                    &times;
                </Button>{' '}
            </ListGroup.Item>
        </>
    )
}

export default Note
