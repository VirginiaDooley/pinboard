import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PinBoardContainer from './containers/PinBoardContainer'
import SearchResults from './components/SearchResults'
import SearchContainer from './containers/SearchContainer'

class App extends React.Component {
  render () {
    return (
        <Router>
          <div className="App">
            <NavBar />
            <PinBoardContainer />
          </div>
        </Router>
    );
  }
}

export default App;
