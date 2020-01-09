import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Search from './Components/Users/Search';
import Alert from './Components/layout/Alert';
import About from './Components/pages/About'
import GithubState from './context/github/githubState';
import './App.css';
import AlertState from './context/alert/alertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github" />

            <div className="container">
              <Alert/>
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search/>
                    <Users/>
                  </Fragment>
                )} />

                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
