import React from 'react';
import './form.css';

<h1>Information</h1>
const Form = ({text}) => <div>
    
    <form>
        <span>{text}</span><input type='text' placeholder={text} />
        <button>Login</button>
    </form>
</div>

export default Form;