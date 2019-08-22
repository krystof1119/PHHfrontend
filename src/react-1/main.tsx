import * as React from 'react';
import VueDiv from "./vueDiv";

export default function MainComponent() {

    return (
        <div>
            <a className="disappearing">React instance 1 loaded</a>
            <VueDiv/>
        </div>
    )
}
