import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import deepForceUpdate from 'react-deep-force-update'

console.log('index evaluated')
const rootEl = document.getElementById('root');
let instance = ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

global.forceUpdate = () => deepForceUpdate(instance)

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default;
    instance = ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
