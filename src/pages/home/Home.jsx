import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import AlertMassedge from '../../components/alert/AlertMassedge'
import FormNote from '../../components/form/FormNote'
import Notes from '../../components/notes/Notes'
import { addTodo } from '../../redux/todoSlice'

const Home = () => {
    const [text, setText] = useState('')
    const [show, setShow] = useState(false)
    const [alertMessage, setAlertMessage] = useState({
        message: '',
    })

    const dispatch = useDispatch()

    const addTask = (e) => {
        e.preventDefault()
        setShow(() => ({ show: true }))
        if (text.trim().length) {
            dispatch(addTodo({ text }))
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

    return (
        <>
            <Container className="main">
                <AlertMassedge
                    show={show}
                    setShow={setShow}
                    alertMessage={alertMessage}
                />
                <FormNote
                    show={show}
                    setShow={setShow}
                    setAlertMessage={setAlertMessage}
                    text={text}
                    setText={setText}
                    addTask={addTask}
                />
                <Notes setShow={setShow} setAlertMessage={setAlertMessage} />
            </Container>{' '}
        </>
    )
}

export default Home
