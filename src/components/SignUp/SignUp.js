import React from 'react';
import './SignUp.css';

const SignUp = (props) => {
  return (
    <div className='sign-up'>
      <div>What's your name, trainer?</div>
        <input
          className='name'
          type='text'
          placeholder="Press enter to submit"
          value={props.name}
          onChange={props.handleNameChange}
          onKeyPress={props.handleKeyPress}
        />
    </div>
  );
};

export default SignUp;
