import React from "react";
import Todo from "./Todo";


const TodoList = ({todos, todoDelete, todoToggleCompleted, setTodoEdit, todoEdit , todoUpdate }) => {
    return (
        <>
            {
                todos.length === 0 
                ? (
                    <div className="alert alert-especial">
                        No hay tareas. Agrega una {":)"}
                    </div>
                )
                : (
                    todos.map( todo => (
                        <Todo 
                        todo={todo} 
                        key={todo.id} 
                        todoDelete={todoDelete}
                        todoToggleCompleted={todoToggleCompleted}
                        setTodoEdit={setTodoEdit}

                        todoEdit={todoEdit}
                        todoUpdate={todoUpdate}
                        />
                    ))
                )
            }
        </>
    );
};

export default TodoList