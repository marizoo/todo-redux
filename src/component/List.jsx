import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleComplete } from '../redux/todoSlice';
import ListItem from './ListItem';

const iconStyle = {
  cursor: 'pointer',
}

const List = () => {

  const datas = useSelector((state) => state.todoStore);

  return (
            <ul>
              {datas.map((data) => (
               <ListItem id={data.id} text={data.text} isCompleted={data.isCompleted}/>
              ))} 
            </ul>
    
  )};

export default List;
