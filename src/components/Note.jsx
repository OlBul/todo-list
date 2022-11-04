import React from 'react'
import { Button } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

const Note = ({ toggleTodoComplete, removeTodo, id, text, commpleted }) => {
    return (
        <>
            <ListGroup.Item className="list-group-item note">
                <input
                    type="checkbox"
                    checked={commpleted}
                    onChange={() => toggleTodoComplete(id)}
                />
                <strong className="todo-text">{text}</strong>
                <small className="todo-date">
                    {new Date().toLocaleDateString()}
                </small>
                <Button
                    variant="outline-danger btn-sm"
                    onClick={() => removeTodo(id)}
                >
                    &times;
                </Button>{' '}
            </ListGroup.Item>
        </>
    )
}

export default Note
