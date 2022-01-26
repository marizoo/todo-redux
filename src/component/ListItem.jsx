import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';


const ListItem = ({id, text, isCompleted}) => {
    const dispatch = useDispatch();

    const handleCompleteClick = () => {
        dispatch(toggleComplete({id: id, isCompleted: !isCompleted}))
    }

  const handleDelete = () => {
    dispatch(deleteTodo({id : id}))
  }


  return (
  
    <li className=" col-md-4 list-box" key={id}>
        <div className="checkbox"> 
        <input type="checkbox" className='mr-3' checked={isCompleted} onChange={handleCompleteClick}/>
        
        </div>
        {!isCompleted && <p className='list-text'>{text}</p>}
        {isCompleted && <p className='list-text strike'>{text}</p>}
        
        <button className='btn btn-danger list-btn' onClick={handleDelete}>Delete</button>
    </li>
 
  )};

export default ListItem;
