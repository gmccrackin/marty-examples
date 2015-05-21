import Marty from 'marty';

import stores from './stores';
import actions from './actions';
import queries from './queries';
import sources from './sources';

class Application extends Marty.Application {
    constructor(options) {
        super(options);

        this.register(stores);
        this.register(actions);
        this.register(queries);
        this.register(sources);
    }
}

export default Application;
