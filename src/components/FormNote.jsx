import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

const FormNote = ({ text, setText, addTodo }) => {
    const handleChange = (e) => setText(e.target.value)
    return (
        <>
            <h2 className="form-title">Create your to-do list!</h2>
            <Form className="mb-3 form" onSubmit={addTodo}>
                <Form.Control
                    value={text}
                    onChange={handleChange}
                    placeholder="Your note"
                />
                <Button variant="outline-secondary" onClick={addTodo}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default FormNote
