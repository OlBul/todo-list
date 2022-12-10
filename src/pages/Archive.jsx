import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector } from 'react-redux'
import Note from '../components/Note'

const Archive = ({  setShow, alertMessage, show, setAlertMessage, id, text, setText, commpleted }) => {
  const todos = useSelector(state => state.todos.todos)
  
   
  return (
    <ListGroup variant="flush" className="notes">
    {
        todos.map((todo) => (
          <Note
                        key={todo.id}                      
                        {...todo}
                    />
        )) 
     
    }
</ListGroup>
  )
}

export default Archive