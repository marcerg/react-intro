import React from "react";
import {TodoContext} from './TodoContex';
import '../hoja-de-estilos/TodoForm.css';

function TodoForm(){
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const onSubmit =(event)=>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    }
    
    const onCancel =(event)=>{
        setOpenModal(false);
    }
    
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };
    
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder="Entrenar"
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className="Todoform-buttonContainer">
                <button
                    type="button" 
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel">
                        Cancelar
                </button>
                <button
                    type="submit" 
                    className="TodoForm-button TodoForm-button--add">
                        Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm};