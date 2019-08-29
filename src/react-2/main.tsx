import * as React from 'react';
import RainbowButton from "./rainbowButton";
import ManualAdder from "./manualAdder";
import {useState} from "react";

export default function MainComponent() {
    let [currentInput, setCurrentInput] = useState('');
    return (
        <div>
            <a className="disappearing">React instance 2 loaded</a>
            <h5 style={{textAlign: 'center'}}>Don't know what to do here? Press the help button above this message.</h5>
            <RainbowButton onClick={color => setCurrentInput(currentValue => currentValue + String.fromCodePoint(color))} />
            <p>Currently, your input is: "{currentInput}"</p>
            <ManualAdder onClick={string => setCurrentInput(currentValue => currentValue + string)}/>
        </div>
    )
}
