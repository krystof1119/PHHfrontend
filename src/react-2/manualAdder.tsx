import * as React from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';
import {useState} from "react";

export default function ManualAdder(props) {
    let [visible, setVisible] = useState(false);
    let [currentEntry, setCurrentEntry] = useState('');
    return (
        <div>
            <Checkbox
                checked={visible}
                label={'Showcase mode'}
                onChange={val => setVisible(val)}
            />
            <br/>
            <div>
                <div style={visible ? {maxWidth: '12cm', margin: 'auto'} : {display: "none"}}>
                    <p>In a "real deployment", this won't be visible. However, for the showcase, I enabled you to cheat
                        a little, and instead of waiting for the entire thing to cycle around (like you would need to in
                        the real world), you can just enter whichever string you want to add to the input, and press the
                        'ADD' button to add it to the string.</p>
                    <input type={'text'} className={'form-control'} onChange={(event) => setCurrentEntry(event.target.value)}/>
                    <button className={'btn btn-primary'} onClick={() => props.onClick(currentEntry)}>Add to input</button>
                    <br/>
                </div>
            </div>
        </div>
    )
}
