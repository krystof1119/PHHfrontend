import * as React from 'react';
import RainbowButton from "./rainbowButton";

export default function MainComponent() {
    return (
        <div>
            <a className="disappearing">React instance 2 loaded</a>
            <RainbowButton onClick={color =>console.log(String.fromCodePoint(color))} />
        </div>
    )
}
