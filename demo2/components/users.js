import React from 'react';
import Marty from 'marty';

class User extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.id} {this.props.name}</div>
            </div>
        )
    }
}

class Users extends React.Component {
    onSubmit(e) {
        e.preventDefault();

        let id = this.refs.id.getDOMNode();
        let name = this.refs.name.getDOMNode();

        this.context.app.userActionCreators.addUser({
            id: id.value,
            name: name.value
        });

        id.value = '';
        name.value = '';
    }
    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.props.users && this.props.users.map((user) => {
                    return <User key={user.id} {...user} />;
                })}
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type='text' placeholder='id' name='id' ref='id' />
                    <input type='text' placeholder='name' name='name' ref='name' />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

Users.contextTypes = Marty.contextTypes;

export default Marty.createContainer(Users, {
    listenTo: 'userStore',
    fetch: {
        users() {
            return this.context.app.userStore.state
        }
    }
});
