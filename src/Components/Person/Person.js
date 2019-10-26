import React from 'react';

import './Person.css';

const person = (props) => (
    <article className="Person" onClick={props.clicked}>
        <div className="Info">
            <div className="Name">{props.name}</div>
        </div>
    </article>
);

export default person;