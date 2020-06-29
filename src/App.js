import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';

import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Routes from './routes/Routes';


function App() {
  return (
    <Provider store={store}>
        <React.Fragment>
          <Router history={createBrowserHistory()}>
            <Routes></Routes>
          </Router>
        </React.Fragment>
      

    </Provider>
  );
}

export default App;

