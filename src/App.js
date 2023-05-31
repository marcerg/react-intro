import React from 'react';
import { AppUI } from './appUI';
import { useLocalStorage } from './CustomHook/useLocalStorage';
import { TodoProvider } from './Componentes/TodoContex';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;