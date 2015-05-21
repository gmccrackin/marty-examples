import React from 'react';
import Marty from 'marty';

window.React = React;
window.Marty = Marty;

import App from './app';
import UsersComponent from './components/users.js';

let app = new App();
let Users = app.bindTo(UsersComponent);

React.render(<Users />, document.body);

window.app = app;

export default app;
