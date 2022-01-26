import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import InputForm from './component/InputForm';
import List from './component/List';

const App = () => {

  const [datas, setDatas] = useState([])
  const [total, setTotal] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNewInput = (newInput) => {
    const newData = {
      id: newInput.id,
      text: newInput.text,
      isCompleted,
    }

    const newDatas = [...datas, newData];
    setDatas(newDatas);
    addTotal();
  }

  const handleDelete = (clickedId) => {
    const dataDelete = datas.filter(data => data.id !== clickedId);

    setDatas(dataDelete);
    minusTotal();
  }

  const addTotal = () => {
    const dataTotal = total + 1;
    setTotal(dataTotal);
  }

  const minusTotal = () => {
    const dataTotal = total - 1;
    setTotal(dataTotal);
  }

  const handleCheckBox = (index) => {
    const dataCheckBox = datas[index].isCompleted = !datas[index].isCompleted
    setIsCompleted(dataCheckBox);
    console.log('DATAS', datas);
  }

  

return (
    <div className='container'>
        <h1 className='mt-5'>My Todo List</h1>
        <InputForm onNewInputs={handleNewInput}/>
        <List datas={datas} onHandleDelete={handleDelete} onHandleCheckBox={handleCheckBox}/>
        <h2>Total Items: {total}</h2>
    </div>

  )};

export default App;

// https://www.youtube.com/watch?v=fiesH6WU63I
// till minute 2.00
