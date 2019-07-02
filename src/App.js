import React from "react";
import logo from "./logo.svg";
import Main from "./components/Main";
import "./App.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import registeredUsers from "./redux/registeredUsers";
import reducer from "./redux/redux-reducer";
import styled from "styled-components";
import { Route, Link, BrowserRouter, Switch, Redirect } from "react-router-dom";
import LoginComponent from "./components/login-component";
import regiteredUsersState from "./redux/registeredUsers";
import MyProvider from "./MyProvider";
import MyContext from "./MyContext";

const rootReducer = combineReducers({ todoList: reducer });

const store = createStore(rootReducer, regiteredUsersState);

function App() {
  return (
    <MyProvider>
      <MyContext.Consumer>
        {context => (
          <div id="parent" style={{ backgroundColor: context.BGColor }}>
            <Provider store={store}>
              <BrowserRouter>
                <Switch>
                  <Route path="/app" component={Main} />

                  <Route path="/login" component={LoginComponent} />
                  <Redirect to="/login" />
                </Switch>
              </BrowserRouter>
            </Provider>
          </div>
        )}
      </MyContext.Consumer>
    </MyProvider>
  );
}

export default App;
