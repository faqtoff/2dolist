import React from 'react'
import ModalButtonWrapper from '../FaqStyle/Modal/ModalButtonWrapper'
import TodoForm from './TodoForm'

const TodoFormMobile = ({buttonText, todoEdit,todoAdd,todoUpdate,setTodoEdit}) => {
    return (
        <ModalButtonWrapper buttonText={buttonText} className='w-fill-available d-md-none'>
            <TodoForm 
            todoEdit={todoEdit}
            todoAdd={todoAdd}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit} />
        </ModalButtonWrapper> 
    )
}

export default TodoFormMobile
