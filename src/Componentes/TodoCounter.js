import '../hoja-de-estilos/TodoCounter.css';
import React from 'react';
import { TodoContext } from './TodoContex';

function TodoCounter(){
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)
    
    return (
        <h1 className='TodoCounter'>Has completado <span>{completedTodos} </span>  
         de <span>{totalTodos}</span> ToDos
        </h1>
    );
}

export { TodoCounter };