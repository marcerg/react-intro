import React from 'react';
import { TodoCounter } from './Componentes/TodoCounter';
import { TodoSearch } from './Componentes/TodoSearch';
import { TodoList } from './Componentes/TodoList';
import { TodoItem } from './Componentes/TodoItem';
import { TodosLoading } from './Componentes/TodoLoading';
import { TodosError } from './Componentes/TodoError';
import { EmptyTodos } from './Componentes/EmptyTodos';
import { CreateTodoButton } from './Componentes/CreateTodoButton';
import {TodoForm} from './Componentes/TodoForm'
import {Modal} from './Componentes/Modal';
import { TodoContext } from './Componentes/TodoContex';

function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
    
        <TodoList>
                {loading && (
                <>
                    <TodosLoading />
                </>
                )}
                {error && <TodosError/>}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    
    {openModal && (
      <Modal>
        <TodoForm />
      </Modal>
    )}
    </>
  );
}

export { AppUI };