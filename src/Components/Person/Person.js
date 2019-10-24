import React from 'react';

import './Person.css';

const person = (props) => (
    <article className="Person" onClick={props.clicked}>
        {/* <h1>{props.title}</h1> */}
        <div className="Info">
            <div className="Name">{props.name}</div>
        </div>
    </article>
);

export default person;