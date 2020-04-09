import React from 'react';
import './form.css';

const Form = ({text}) => <div>
    <h1>Information</h1>
    <form>
        <span>{text}</span><input type='text' placeholder="Name" />
        <span>{text}</span><input type='email' placeholder="Email" />
        <button>Login</button>
    </form>
</div>

export default Form;