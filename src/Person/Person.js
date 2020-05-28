import React from 'react';

const person = (props) => {

    return (
        <p>
            Hi {props.name}, your age is {props.age} years and fav number is {Math.floor(Math.random() * 20)}
        </p>
    )
};

export default person;