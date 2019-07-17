import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PinBoardContainer from './containers/PinBoardContainer'
import SearchContainer from './containers/SearchContainer'
import NewBoard from './components/NewBoard';
import SaveBoard from './components/SaveBoard';
import BoardsList from './components/BoardsList';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <NavBar />
          </div>
          <div className="column">
            <SearchContainer />
          </div>

            <Route exact path="/new" component={NewBoard} />
            <Route exact path="/save" component={SaveBoard} />
            <Route exact path="/index" component={BoardsList} />

          <div className="Pinboard">
            <div className="row:after">
              <PinBoardContainer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
