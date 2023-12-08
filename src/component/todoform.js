import "../styles/todoform.css"
import React from 'react'

const Todoform = (props) => {
  return (
     <div className='form-input'>
      <label> Input </label>
      <input placeholder={props.placeholder}/>
    </div>
    );
};

export default Todoform;