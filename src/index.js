import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import repositoryReducer from "./store/reducers/repositoryReducer";
import errorHandlerReducer from "./store/reducers/errorHandlerReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  repository: repositoryReducer,
  errorHandler: errorHandlerReducer
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
