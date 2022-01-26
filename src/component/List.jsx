import React from 'react';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

const iconStyle = {
  cursor: 'pointer',
}

const List = ({datas, onHandleDelete, onHandleCheckBox}) => {
  return (
    <div className='row'>
            <ul>
              {datas.map((data, index) => (
                <li className=" col-sm-4 list-box" key={data.id}>
                  <div className="checkbox"> 
                    {data.isCompleted && <GrCheckboxSelected style={iconStyle} onClick={() => onHandleCheckBox(index)}/>}
                    {!data.isCompleted && <GrCheckbox style={iconStyle} onClick={() => onHandleCheckBox(index)}/>}
                  </div>
                  {!data.isCompleted && <p className='list-text'>{data.text}</p>}
                  {data.isCompleted && <p className='list-text strike'>{data.text}</p>}
                  
                  <button className='btn btn-danger list-btn' onClick={()=> onHandleDelete(data.id)}>Delete</button>
                </li>
              ))}
                
                
            </ul>
    </div>
  )};

export default List;
