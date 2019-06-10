import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import history from './history';
import { Route, Switch } from "react-router-dom";
import configureStore from "./configureStore";
import Home from "../shell/Home";
import Login from "../shell/Login";
import ErrorComponent from "../shell/ErrorCompoenent";
const store = configureStore(history);

store.subscribe(() => {
  console.log("stateupdated");
  console.log(store.getState());
});

function Root(){
   return  (
        <Provider store={store}>
        <Router  history={history}>
          <Switch>
            <ErrorComponent>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            </ErrorComponent>
          </Switch>
        </Router>
      </Provider>

    )
 
};

export default Root;
