import React, { useEffect, useState } from "react";
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import FaqFooter from "./components/FaqStyle/FaqFooter/FaqFooter";
import TodoFormMobile from "./components/TodoForm/TodoFormMobile";

const inicialTodos = [
];
const localTodos = JSON.parse(localStorage.getItem('todos'));


function App() {

  const [ todos, setTodos ] = useState( localTodos || inicialTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const todoDelete = (todoId) => {
    const changedTodos = todos.filter(todo => todo.id !== todoId);
    if (todoEdit && todoId === todoEdit.id) {
      setTodoEdit(null);
    }
    setTodos(changedTodos);
  };
  const todoToggleCompleted = (todoId) => {

    /*const changedTodos = todos.map(todo => {
      const todoEdit = {
        ...todo,
        completed: !todo.completed
      }
      if ( todo.id === todoId ) {
        return todoEdit
      } 
      else {
        return todo
      });
    }*/

    /*
    const changedTodos = todos.map(todo => (
      todo.id === todoId 
      ? {...todo, completed: !todo.completed}
      :todo 
    ));
    */

   const changedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo );

    setTodos(changedTodos);

  };
  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false
    }
    const changedTodos = [

      newTodo,
      ...todos
    ]
    setTodos(changedTodos);
  }
  const todoUpdate = (todoEdit) => {
    const changedTodos = todos.map(todo => (
      todo.id === todoEdit.id
      ? todoEdit
      : todo
    ))
    setTodos(changedTodos);
  }


  return (
    <div className="container">
      <h1 className='text-center mb-0'>ToDoList <span>by faq</span></h1>
      <div className="row justify-content-center">
        <div className="col tareas justify-content-center justify-md-content-start align-md-between">

        <h2 className="text-center">Tareas</h2>
          <TodoFormMobile 
          buttonText='Agregar Tarea' 
          setTodoEdit={setTodoEdit} 
          todoUpdate={todoUpdate} 
          todoAdd={todoAdd}/>

          <TodoList 
          todos={todos}
          todoDelete={todoDelete}
          todoToggleCompleted={todoToggleCompleted}

          setTodoEdit={setTodoEdit}
          todoAdd={todoAdd}
          todoUpdate={todoUpdate}
          todoEdit={todoEdit}
          />
        </div>
        <div className="col d-none d-md-block">
          <TodoForm 
          todoEdit={todoEdit}
          todoAdd={todoAdd}
          todoUpdate={todoUpdate}
          setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
      <FaqFooter />
    </div>
  );
}

export default App;
