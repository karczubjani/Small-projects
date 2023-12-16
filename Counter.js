import React, { useState } from "react";

const Counter = () => {

    const [szam, setSzam] = useState(0);

    return (
        <article>
            <h1> Számláló </h1>
            <h2> {szam} </h2>
            <button onClick={ function(){
                setSzam( szam - 1 )
            }}> - </button>
            <button onClick={ function(){
                setSzam( szam + 1 )
            }}> + </button>
            <p></p>
        </article>
    );
}

export default Counter;