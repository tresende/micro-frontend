import { registerApplication, start } from 'single-spa';

registerApplication('app1', () => import('./root.js'), () => true);

start();