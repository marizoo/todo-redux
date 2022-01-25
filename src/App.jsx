import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import InputForm from './component/InputForm';
import List from './component/List';

const App = () => {
return (
    <div className='container'>
        <h1 className='mt-5'>My Todo List</h1>
        <InputForm />
        <List />
        <h2>Total Items: 5</h2>
    </div>

  )};

export default App;
