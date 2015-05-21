import Marty from 'marty';

import UserConstants from '../constants/userConstants';

class UserStore extends Marty.Store {
    constructor(options) {
        super(options);
        this.state = [];
        this.handlers = {
            addUser: UserConstants.ADD_USER
        }
    }
    addUser(user) {
        this.state.push(user);
        this.hasChanged();
    }
}

export default UserStore;
