import { registerApplication, start } from 'single-spa';

import './index.css';

registerApplication('app1', () => import('./containers/app1/coi-plugin.js'), () => true);
registerApplication('app2', () => import('./containers/app2/index.js'), () => true);

start();