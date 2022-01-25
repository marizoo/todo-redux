import React from 'react';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

const List = () => {
  return (
    <div className='row'>
            <ul>
                <li className=" col-sm-4 list-box">
                    <div className="checkbox">
                        <GrCheckbox />
                        <GrCheckboxSelected />
                    </div>
                    <p className='list-text'>todo 1</p>
                    <button className='btn btn-danger list-btn'>Delete</button>
                </li>
                
            </ul>
    </div>
  )};

export default List;
