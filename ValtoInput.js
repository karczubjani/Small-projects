import React from 'react';

function ValtoInput(adatok) {

    const { label, type, handleChange } = adatok;
  
    function ertekValtozas(e) {
      handleChange(type, e.target.value);
    }
  
    return (
      <div>
        <label> {label} </label>
        <input type="number" onChange={ertekValtozas} />
      </div>
    );
  }

  
  export default ValtoInput;