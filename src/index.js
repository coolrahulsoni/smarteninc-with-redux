import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux";
import store from './store/store'



 
ReactDOM.render(
  <BrowserRouter   >
    <Switch>
      <Route path="/" render={ (props) =>   <Provider store={store}> <App {...props} /> </Provider> } />
      <Redirect to="/tableData" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

