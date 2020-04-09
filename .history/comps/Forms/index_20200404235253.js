import React from 'react';

const Form = () => <div>
    <h1>Information</h1>
    <form>
        <span>Name</span><input type='text' placeholder="Name" />
        <span>Email</span><input type='email' placeholder="Password" />
        <button>Login</button>
    </form>
</div>

export default Form;