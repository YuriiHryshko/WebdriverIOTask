import { config as sharedConfig } from '../wdio.conf.js';

export const config = {
    ...sharedConfig,
    capabilities: [{
        browserName: 'firefox'
    }],
    specs: [
        '../test/specs/**/*.js'
    ]
};