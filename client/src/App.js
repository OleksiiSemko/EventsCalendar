import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EventList from './containers/event-list/index';

import './App.css';

class App extends Component {
  render () {
   return (
    <div className="App">
        <header className="App-header">
          <h1 className="App-title"><Link exact path to='#'>Events Calendar</Link></h1>
        </header>

        <EventList />
      </div>
   )
  };
}

export default App;
