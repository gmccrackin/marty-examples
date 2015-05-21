import Marty from 'marty';

class UserHttpAPI extends Marty.HttpStateSource {
    constructor(options) {
        super(options);
        this.baseUrl = 'http://localhost:3000';
    }
    getUsers() {
        return this.get('/users');
    }
    createUser(user) {
        return this.post({
            url: '/users',
            body: user
        });
    }
}

export default UserHttpAPI;
