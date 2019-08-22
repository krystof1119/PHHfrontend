import * as React from 'react';
import {useEffect, useState} from "react";

export default function RainbowButton(props) {
    let [color, setColor] = useState(0x000000);
    useEffect(() => {
        let interval = setInterval(() => {
            setColor(oldColor => ((oldColor + 0x01) % 0x1000000));
        }, 500);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return (<p>Rainbow button { color }</p>)
}
