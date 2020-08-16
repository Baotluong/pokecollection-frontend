import React from 'react';

const SignUp = (props) => {
  return (
    <div className='sign-up'>
      <div>Hello New Trainer!</div>
      <div>
        <input
          type='text'
          placeholder="What's your name?"
          value={props.name}
          onChange={props.handleNameChange}
          onKeyPress={props.handleKeyPress}
        />
        <button
          disabled={!props.name}
          onClick={props.handleNameClick}
        >Enter</button>
      </div>
    </div>
  );
};

export default SignUp;
