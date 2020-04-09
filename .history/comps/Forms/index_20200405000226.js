import React from 'react';
import './form.css';

const Form = () => <div>
    <h1>Information</h1>
    <form>
        <span>Name</span><input type='text' placeholder="Name" />
        <span>Email</span><input type='email' placeholder="Email" />
        <button>Login</button>
    </form>
</div>

export default Form;