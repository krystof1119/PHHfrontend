import * as React from 'react';
import VueDiv from "./vueDiv";
import Help from "./help";

export default function MainComponent() {

    return (
        <div>
            <a className="disappearing">React instance 1 loaded</a>
            <Help />
            <VueDiv/>
        </div>
    )
}
