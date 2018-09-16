import React from 'react'
import './UserInput.css'

const userInput = (props) =>{
    return (
        <div className='userInput'>
            <p>{props.text}</p>
            <input
                type='text'
                onChange={props.changed}>
            </input>
        </div>
    );
};

export default userInput;