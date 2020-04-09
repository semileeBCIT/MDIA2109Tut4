import React from 'react';

const Input = ({placeholder}) => <div>
  <input type='text' placeholder="Type your chat here" />
</div>

Input.defaultProps = {
    placeholder:"Type your chat here!"
}

export default Input;