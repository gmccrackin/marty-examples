import React from 'react';

import App from './app';
import UsersComponent from './components/users.js';

let app = new App();
let Users = app.bindTo(UsersComponent);

React.render(<Users />, document.body);

export default app;
