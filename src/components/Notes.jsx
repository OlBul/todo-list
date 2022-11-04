import React from 'react'
import { Button } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import Note from './Note'

const Notes = ({ todos, removeTodo, toggleTodoComplete }) => {
    return (
        <ListGroup variant="flush" className="notes">
            {
                todos.map((todo) => (
                    <Note
                        key={todo.id}
                        removeTodo={removeTodo}
                        toggleTodoComplete={toggleTodoComplete}
                        {...todo}
                    />
                )) /* (
                <ListGroup.Item
                    className="list-group-item note"
                    key={todo.id}
                    
                >
                    <input
                        type="checkbox"
                        checked={todo.commpleted}
                        onChange={() => toggleTodoComplete(todo.id)}
                    />
                    <strong className="todo-text">{todo.text}</strong>
                    <small className="todo-date">
                        {new Date().toLocaleDateString()}
                    </small>
                    <Button
                        variant="outline-danger btn-sm"
                        onClick={() => removeTodo(todo.id)}
                    >
                        &times;
                    </Button>{' '}
                </ListGroup.Item>
            ) */
            }
        </ListGroup>
    )
}

export default Notes
