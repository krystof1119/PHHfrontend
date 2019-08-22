import * as React from 'react';
import Vue from 'vue/dist/vue.esm';
import {useEffect} from "react";

import angularLoadCustom from '../angular/main';

export default function VueDiv() {
    useEffect(() => {
        new Vue({
            el: '#vue-thing',
            data: {
                message: '<a class="disappearing">Vue loaded</a><br><angular-root>Loading angular</angular-root>',
                html: 'rawHtml'
            },
            created(): void {
                angularLoadCustom()
            },
            html: 'rawHtml',
            template: '<span v-html="message">{{ message }}</span>'
        })
    });
    return (
        <div>
            <div id='vue-thing'/>
        </div>
    )
}
