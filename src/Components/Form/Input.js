import React from 'react'
import "./Input.css"
const Input = ({type, label, name}) => {
  return (
    <div className="txt_field">
    <input type={type} name={name} required/>
    <span></span>
    <label>{label}</label>
  </div>
  )
}
export default Input;
