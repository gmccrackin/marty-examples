import Marty from 'marty';

import UserConstants from '../constants/userConstants';

class UserActionCreators extends Marty.ActionCreators {
    addUser(user) {
        this.dispatch(UserConstants.ADD_USER, user);
    }
}

export default UserActionCreators;
