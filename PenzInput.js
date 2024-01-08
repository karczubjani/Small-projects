import React from "react";

const PenzInput = ({penzErtek, setErtek}) => {

    function handleChange(penzErtek) {
        setErtek(penzErtek * 380);
    }

    function ertekValtozas(e) {
        handleChange( e.target.value );
      }

    return (
        <div>
            <label> Euro: 
            <input type="number" onChange={ertekValtozas} />
            </label>
        </div>
    );
}


export default PenzInput;