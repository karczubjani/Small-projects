import React, { useState } from "react";
import Headline from "./Headline";
import PenzInput from "./PenzInput";


const Penzvalto = () => {

    const [penzErtek, setErtek] = useState(0);
    

    return(
        <article>
            <Headline penzErtek={penzErtek}/>
            <PenzInput penzErtek={penzErtek} setErtek={setErtek}/>
        </article>
    );

}

export default Penzvalto;