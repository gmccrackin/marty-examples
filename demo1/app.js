import Marty from 'marty';

import stores from './stores';
import actions from './actions';

class Application extends Marty.Application {
    constructor(options) {
        super(options);

        this.register(stores);
        this.register(actions);
    }
}

export default Application;
