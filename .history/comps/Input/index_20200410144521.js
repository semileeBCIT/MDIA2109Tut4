import React, {useState} from 'react';
import './input.css';
import CustomButton from '../CustomButton';

const Input = ({placeholder, onclick}) => {
  const [val, setVal] = useState("");

  return <div className="input_cont">
    <input onChange={(e)=>{
      setVal(e.target.value)
     }} type='text' placeholder={placeholder} />
    <CustomButton onclick={()=>{
     // alert(val);
      onclick(val);
    }} text="send" color="#58F"/>
  </div>;
}
Input.defaultProps = {
    placeholder:"Type your chat here!",
    onclick:()=>{}
}

export default Input;