import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import InputForm from './component/InputForm';
import List from './component/List';
import TotalItems from './component/TotalItems';


const App = () => {

return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 className='mt-5'>My Todo List</h1>
        <InputForm />
        <List />
        <TotalItems />
        </div>
    </div>

  )};

export default App;

// https://www.youtube.com/watch?v=fiesH6WU63I
// till minute 2.00
