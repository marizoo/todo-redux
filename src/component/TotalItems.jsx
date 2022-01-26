import React from 'react';
import { useSelector } from 'react-redux';


const TotalItems = () => {

  const completedTodos = useSelector((state) => 
    state.todoStore.filter((todo) => todo.isCompleted === true)
  )

  return (
  <div>
      <h2>Total Completed Items: {completedTodos.length}</h2>
  </div> 
  )};

export default TotalItems;
