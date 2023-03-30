import useEffect from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector } from 'react-redux'
import Note from './Note'

const Notes = ({
    setShow,
    alertMessage,
    show,
    setAlertMessage,
    removeTask,
    text,
}) => {
    const todos = useSelector((state) => state.todos.todos)

    return (
        <ListGroup variant="flush" className="notes">
            {todos.map((todo) => (
                <Note
                    key={todo.id}
                    setShow={setShow}
                    setAlertMessage={setAlertMessage}
                    {...todo}
                />
            ))}
        </ListGroup>
    )
}

export default Notes
