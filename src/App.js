import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer';

class App extends React.Component {
  render () {
    return (
        <Router>
        <div className="App">
          <NavBar />
          <SearchContainer />
        </div>
        </Router>
    );
  }
}

export default App;
