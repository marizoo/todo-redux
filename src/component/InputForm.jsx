import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const InputForm = () => {

  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();

    dispatch(addTodo({
      text: input,
    }))
    setInput('');
  }

  return (
    
    <form className="col-md-4" onSubmit={handleSubmit}>
        <input value={input} onChange={(ev) => setInput(ev.target.value)} type="text" className='form-control my-2' placeholder='Add Todo' />
        <button type="submit" className='btn btn-primary fw-bold'>Submit</button>
    </form>

)};

export default InputForm;
