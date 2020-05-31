import React from 'react';
import classes from './Person.css';

const person = (props) => {

    const rnd = Math.random();

    if(rnd > 0.7) {
        throw new Error('Something went wrong');
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}> Hi {props.name}, your age is {props.age} years and fav number is {Math.floor(Math.random() * 20)} </p>
            
            <p>{props.childern} </p>
        </div>
    );
};

export default person;