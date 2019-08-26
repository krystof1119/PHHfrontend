import { Component } from '@angular/core';
import * as ReactDOM from 'react-dom';
import MainComponent from "../../react-2/main";

@Component({
    selector: 'angular-root',
    template: '<a class="disappearing">Angular loaded</a><div class="container bootstrap-outer-container"><a class="disappearing">Bootstrap loaded</a><div id="reactInnerContainer"></div></div>',
    styles: []
})
export class AppComponent  {
    ngOnInit() {
        let reactInnerContainer = document.getElementById('reactInnerContainer');
        ReactDOM.render(MainComponent(), reactInnerContainer)
    }
}
