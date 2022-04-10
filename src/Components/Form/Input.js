import React from 'react'
import "./Input.css"
const Input = (props) => {
  return (
    <div className="txt_field">
    <input type={props.type} required/>
    <span></span>
    <label>{props.label}</label>
  </div>
  )
}
export default Input;
