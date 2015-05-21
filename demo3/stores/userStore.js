import Marty from 'marty';
import _ from 'lodash';

import UserConstants from '../constants/userConstants';

class UserStore extends Marty.Store {
    constructor(options) {
        super(options);
        this.state = [];
        this.handlers = {
            addUser: UserConstants.ADD_USER,
            addUsers: UserConstants.RECEIVE_USERS,
            updateUser: UserConstants.UPDATE_USER
        }
    }
    addUser(user) {
        this.state.push(user);
        this.hasChanged();
    }
    addUsers(users) {
        this.state = users;
        this.hasChanged();
    }
    updateUser(id, user) {
        var userIndex = _.findIndex(this.state, 'id', id);
        if (userIndex > -1) {
            this.state[userIndex] = user;
        }
    }
    getUsers() {
        return this.fetch({
            id: 'all-users',
            locally() {
                if (this.state.length) {
                    return this.state;
                }
            },
            remotely() {
                return this.app.userQueries.getUsers()
            }
        });
    }
}

export default UserStore;
