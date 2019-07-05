import * as serviceWorker from './serviceWorker';
import {
    registerApplication,
    start
} from 'single-spa';

registerApplication('app1', () => import('./containers/app1/index.js'), () => true);
registerApplication('app2', () => import('./containers/app2/index.js'), () => true);
registerApplication('app3', () => import('./containers/app3/index.js'), () => true);

start();
serviceWorker.register();