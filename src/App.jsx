import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import MainPage from './components/pages/main/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route path="/" render={() => <Redirect to="/main" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
