import React, { useState } from 'react';

const hex2rgb = (hex) => {
    if (!/^#[0-9A-Fa-f]{6}$/g.test(hex)) {
        return "Error input!";
    };
    
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `rgb(${r},${g},${b})`;
};

export default function Converter() {
    const [ result, setResult ] = useState('')

    const onChange = element => {     
        element.preventDefault();
        const { target } = element
        if(target.value.length === 7) {
            setResult(hex2rgb(target.value))
        }
    }

    return(
        <div style={{ backgroundColor: `${result}` }}>
            <form className='formStyle'>
                <input className="inputForm" onInput={onChange} type='text' name='rgb' placeholder='Input HEX value...'/>
                <div className="outputField">{result}</div>
            </form>
        </div>
    )
}