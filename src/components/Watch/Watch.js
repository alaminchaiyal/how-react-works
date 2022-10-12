import React, { useState } from 'react';
import Display from '../Display/Display';
import Knob from '../Knob/knob';
const Watch = () => {
    const [step, setStep] = useState(0);
    const move = ()=>{
        const count = step + 1;
        setStep(count);
    }
    return (
        <div style={{border: "10px solid green"}}>
            <h2>This is my smart watch</h2>
            <p>Step: {step}</p>
            <button onClick={move}>Move</button>
            <div style={{border: "10px solid blue", margin: "20px"}}>
                <Display name = "garmin" steps = {step}></Display>
            </div>
            <div style={{border: "10px solid red", margin: "20px"}}>
                <Knob dialCode = {step}></Knob>
            </div>
        </div>
    );
};

export default Watch;