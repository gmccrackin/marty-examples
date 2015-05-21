import Marty from 'marty';

import UserConstants from '../constants/userConstants';

class UserActionCreators extends Marty.ActionCreators {
    addUser(user) {
        this.dispatch(UserConstants.ADD_USER, user);

        this.app.userAPI.createUser(user).then(res => {
            this.dispatch(UserConstants.UPDATE_USER, res.body.id, res.body);
        });
    }
}

export default UserActionCreators;
