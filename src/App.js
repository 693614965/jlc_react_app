import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import promiseMiddleware from "redux-promise";
import MyReducers from "./reducers/MyReducers";
import "./App.css";
import Index from "./index/Index";
import LoginIndex from "./index/login/LoginIndex";
import RegisterIndex from "./index/register/RegisterIndex";
import ClientAppIndex from "./client_admin/App/AppIndex";


const store = createStore(MyReducers, applyMiddleware(promiseMiddleware))


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Index}/>
                        <Route path="/login" component={LoginIndex}/>
                        <Route path="/register" component={RegisterIndex}/>
                        <Route path="/client" component={ClientAppIndex}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
