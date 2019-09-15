import config from '../webpack.config';
import express from 'express';
import listenApplication from './server/listen';

const app = express();

if (config.mode === 'development') {
    const configure = require('./server/configure/hot').default;
    console.log('Application is in development mode');
    configure(app, config);
} else {
    const configure = require('./server/configure/prod').default;
    console.log('Application is in production mode');
    configure(app, config);
}

listenApplication(app);
