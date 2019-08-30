import { Component } from '@angular/core';
import * as ReactDOM from 'react-dom';
import MainComponent from "../../react-2/main";
import * as React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import config from "../../config";

@Component({
    selector: 'angular-root',
    template: '<a class="disappearing">Angular loaded</a><div class="container bootstrap-outer-container"><a class="disappearing">Bootstrap loaded</a><div id="reactInnerContainer"></div></div>',
    styles: []
})
export class AppComponent  {
    ngOnInit() {
        const client = new ApolloClient({
            uri: config.apiServer
        });
        let reactInnerContainer = document.getElementById('reactInnerContainer');
        ReactDOM.render(React.createElement(ApolloProvider, {client, children: React.createElement(MainComponent)}), reactInnerContainer);
    }
}
