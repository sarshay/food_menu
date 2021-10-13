import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
// import './style/app.scss';
import App from './page/shop';
import reportWebVitals from './reportWebVitals';import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './page/home';


ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>
        <Route path={`/:topicId`}>
          <App />
        </Route>
        <Route path={`/`}>
          <Home/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
