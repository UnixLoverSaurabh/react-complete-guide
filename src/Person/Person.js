import React from 'react';
import Radium from 'radium';
import './Person.css'
const person = (props) => {

    const style = {
        '@media (min-width : 500px)': {
            width: '450px'
        }
    };

    return (
        <div style={style} className="Person">
            <p onClick={props.click}> Hi {props.name}, your age is {props.age} years and fav number is {Math.floor(Math.random() * 20)} </p>
            
            <p>{props.childern} </p>
        </div>
    );
};

export default Radium(person);