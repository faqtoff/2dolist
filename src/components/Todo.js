import React from 'react';
import TodoFormMobile from './TodoForm/TodoFormMobile';

const Todo = ({ todo, todoDelete, todoToggleCompleted, setTodoEdit, todoUpdate, todoEdit, todoAdd }) => {
    return (
        <div className="card ">
            <div className="card-body" >
                <h3 className="card-title text-end " >
                    {todo.title}
                    <button 
                    className={`btn btn-sm ${todo.completed ? 'btn-success' : 'btn-outline-success'} ms-2 `}
                    onClick={() => todoToggleCompleted(todo.id)} 
                    >
                        {todo.completed ? 'Terminado' : 'Terminar'}
                    </button>
                </h3>
                <p className="card-text text-end ">
                    {todo.descripcion}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <div onClick={() => setTodoEdit(todo)}>
                    <TodoFormMobile buttonText='Editar' setTodoEdit={setTodoEdit} todoUpdate={todoUpdate} todoEdit={todoEdit} todoAdd={todoAdd}/>
                    </div>
                    <button className="d-none d-md-block" onClick={() => setTodoEdit(todo)} >Editar</button>
                    <button className="" onClick={() => todoDelete(todo.id)} >Eliminar</button>
                </div>
            </div>
        </div>
    );
};
export default Todo;