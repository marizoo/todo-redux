import { nanoid } from '@reduxjs/toolkit';
import React, {useState} from 'react';

const InputForm = ({onNewInputs}) => {

  const [input, setInput] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newInput = {
      id: nanoid(),
      text: input,
    }

    onNewInputs(newInput);
    setInput('');
  }

  return (
    
    <form className="col-md-4" onSubmit={handleSubmit}>
        <input value={input} onChange={(ev) => setInput(ev.target.value)} type="text" className='form-control my-2' placeholder='Add Todo' />
        <button type="submit" className='btn btn-primary fw-bold'>Submit</button>
    </form>

)};

export default InputForm;
