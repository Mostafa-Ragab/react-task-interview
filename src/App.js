import React from 'react';
import './App.css';
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';
import StagesTabs from './components/Stages-tabs.jsx';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <div style={{ backgroundColor: "#f8f8ff" }}>
      <Header/>
      <div className="home container" >
            <div className="row">
                <div className="col ">
                    <Switch>
                      <Route exact path='/' render={() =>  <Redirect to='/stages' /> }/>
                      <Route exact path='/stages' component={StagesTabs} />
                    </Switch>
                </div>
            </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
