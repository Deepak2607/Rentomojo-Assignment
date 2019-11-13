import React, { Component } from 'react';
import UserPosts from './components/Posts/UserPosts';
import FullPost from './components/FullPost/FullPost';
import Users from './components/Users/Users';
import {Route,NavLink, Switch} from 'react-router-dom';

class App extends Component {
    
    render () {
        
        return (
            <div>
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Rentomojo</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>All Users</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            
            <div className="container">
            <Route path="/users/:user_id" exact component={UserPosts} />
            <Switch>
            <Route path="/users/:user_id/:id" exact component={FullPost} />
            <Route path="/" exact component={Users} />
            </Switch>
            </div>
            
            </div>
    );
  }  
}

export default App;