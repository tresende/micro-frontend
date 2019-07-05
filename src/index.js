import * as serviceWorker from './serviceWorker';
import {
    registerApplication,
    start
} from 'single-spa';

registerApplication('app1', () => import('./containers/app1/root.app.js'), () => true);
registerApplication('app2', () => import('./containers/app2/root.app.js'), () => true);
registerApplication('app3', () => import('./containers/app3/root.app.js'), () => true);

start();
serviceWorker.register();