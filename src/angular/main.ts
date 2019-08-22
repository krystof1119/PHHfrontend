import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app/app.module";

import 'zone.js';

//setTimeout(()=>platformBrowserDynamic().bootstrapModule(AppModule), 1000);
export default ()=>platformBrowserDynamic().bootstrapModule(AppModule);
