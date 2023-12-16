import React from 'react';
import { useState } from 'react';
import ValtoInput from './ValtoInput';

function Valto() {


    const [atvaltott, setErtek] = useState(0);

    function handleChange(type, ertek) {
        if (type === 'euro') setErtek(ertek * 380);
        if (type === 'forint') setErtek(ertek / 380);
    }

    return (
        <article>
            <div>
                <ValtoInput type="forint" label="Forint: " handleChange={handleChange} />
                <ValtoInput type="euro" label="Euro: " handleChange={handleChange} />
                <div>Az átváltott összeg: {atvaltott}</div>
            </div>
        </article>
    );
}

export default Valto;