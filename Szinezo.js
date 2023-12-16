import React, { useState } from 'react';

const Szinezo = () => {

    const [color, setColor] = useState();

    return (
        <article>
            <h1 style={{ color: color }}> Szinezo </h1>
            <p>
                <button onClick={function () {
                    setColor('red')
                }}>Piros</button>
                
                <button onClick={function () {
                    setColor('blue')
                }}>Piros</button>

                <button onClick={function () {
                    setColor('green')
                }}>Zöld</button>

            </p>
        </article>
    );
}

export default Szinezo;