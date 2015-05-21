import Marty from 'marty';

import UserConstants from '../constants/userConstants';

class UserQueries extends Marty.Queries {
    getUsers() {
        this.dispatch(UserConstants.RECEIVE_USERS_STARTING);

        return this.app.userAPI.getUsers()
            .then(res => this.dispatch(UserConstants.RECEIVE_USERS, res.body))
            .catch(err => this.dispatch(UserConstants.RECEIVER_USERS_FAILED, err))
    }
}

export default UserQueries;
