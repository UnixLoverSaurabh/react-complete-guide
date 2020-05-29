import React from 'react';

const person = (props) => {

    return (
        <div>
            <p onClick={props.click}> Hi {props.name}, your age is {props.age} years and fav number is {Math.floor(Math.random() * 20)} </p>
            
            <p>{props.childern} </p>

            <input type="text" onChange={props.changed}/>
        </div>
    );
};

export default person;