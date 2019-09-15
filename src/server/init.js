import { join } from 'path';
import Log from './app/service/log';

const init = () => {
    let config = require('./app/config').default;

    config.dirname = __dirname;
    config.datadir = join(__dirname, '..', '..', 'data');
    config.log = new Log({
        pathname: join(config.datadir, 'logs'), 
        filename: 'app.log',
    });
    console.log('initalized...')
}

export default init;
