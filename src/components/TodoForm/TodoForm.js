import React, { useState, useEffect } from "react";

const initialFormValues ={
    title: '',
    descripcion: ''
}

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const { title, descripcion } = formValues;
    const [ error, setError ] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit);
        } else {
            setFormValues(initialFormValues);
        }
        return
    }, [todoEdit])

    const handleInputChange = (e) => {
        const changeFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        }
        setFormValues(changeFormValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // trim elimina espacios en blanco
        if (title.trim() ===''){
            setError('Debes indicar un titulo');
            setTimeout(()=> {
                setError(null);
            },2000)
            return;
        }

        if(todoEdit) {
            //Actualizando
            todoUpdate(formValues);
            setSuccessMessage('Actualizado con exito');
        }

        else {
        //Agregar Tarea
        todoAdd(formValues);
        setSuccessMessage('Agregado con exito');
        setFormValues(initialFormValues);
        }

        setTimeout(()=> {
            setSuccessMessage(null);
        },2000)
        setError(null)
    }
    return (
        <div className='col'>
            <h2 className='mt-0 m-md-revert'> {todoEdit ? 'Editar Tarea' : 'Nueva Tarea'}</h2>
            <form onSubmit={handleSubmit} className='col justify-content-center'>

                <input 
                type="text" 
                placeholder="Titulo" 
                value={title}
                name="title"
                onChange={handleInputChange}
                />

                <textarea 
                placeholder="Descripcion"
                value={descripcion}
                name="descripcion"
                onChange={handleInputChange}
                ></textarea>
                {todoEdit&&
                    <button 
                    className="btn btn-warning" 
                    onClick={() => {setTodoEdit(null); setFormValues(initialFormValues)}}
                    > Cancelar </button>
                }

                <button className="m-2" >
                    {todoEdit ? 'Editar Tarea' : 'Agregar Tarea'}
                </button>

            </form>
            {
                error &&
                (
                    <div className="alert alert-danger mt-5">
                        { error }
                    </div>
                )
            }
            {
                successMessage &&
                (
                    <div className="alert alert-success mt-5">
                        { successMessage }
                    </div>
                )
            }
        </div>
    );
};

export default TodoForm