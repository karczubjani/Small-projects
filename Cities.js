import React from 'react';

const City = ( { data } ) => {
    return (
        <article>
            <h1> { data.name } </h1>
            <p> {data.content} </p>
        </article>
    );
}


export default City;