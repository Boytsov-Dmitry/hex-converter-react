import React, { useState } from 'react';

const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    if(isNaN(r) && isNaN(g) && isNaN(b)) {
        return 'Error input!'
    } else {
        document.querySelector('body').style.background = `rgb(${r},${g},${b})`
        document.querySelector('body').style.transition = `background 0.5s ease`
        return [ `# ${r}, ${g}, ${b}` ]; 
    }
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
        <form className='formStyle'>
            <input className="inputForm" onInput={onChange} type='text' name='rgb' placeholder='Input HEX value...'/>
            <div className="outputField">{result}</div>
        </form>
    )
}