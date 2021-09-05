import {
    registerApplication,
    start
} from 'single-spa';

import './index.css';

for (let index = 1; index <= 3; index++) {
    registerApplication('app' + index, () => import('./containers/app' + index + '/index.js'), () => true);
}

start();