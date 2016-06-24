import React from 'react';
// import { Router, Route, browserHistory } from 'react-router'
// import routes from './routes'
// import store from './store'
// import { Provider } from 'react-redux'

console.log('App evaluated');
// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

import Editor from './draft/editor';

class App extends React.Component {
  render() {
    return (
      <div>
        <Editor />
      </div>
    );
  }
}


export default App;
