import { config as sharedConfig } from '../wdio.conf.js';

export const config = {
    ...sharedConfig,
    capabilities: [{
        browserName: 'chrome'
    }],
    specs: [
        '../test/specs/**/*.js'
    ]
};