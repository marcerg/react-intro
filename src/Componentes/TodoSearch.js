import React from 'react';
import '../hoja-de-estilos/TodoSearch.css';
import { TodoContext } from './TodoContex';

function TodoSearch() {
    const {
      searchValue,
      setSearchValue,
    } = React.useContext(TodoContext);
    
    return (
      <input
        placeholder="Estudiar"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    );
  }
  
  export { TodoSearch };