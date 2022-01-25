import React from 'react';

const InputForm = () => {
  return (
    <div className="row">
    <form className="col-sm-4">
        <input type="text" className='form-control my-2' placeholder='Add Todo' />
        <button className='btn btn-primary fw-bold'>Submit</button>
    </form>
</div>
)};

export default InputForm;
