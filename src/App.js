import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import BoardContainer from './containers/BoardContainer'
import SearchContainer from './containers/SearchContainer'
import CreateBoard from './components/CreateBoard';
import ShowBoard from './components/ShowBoard';
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

            <Route exact path="/create" component={CreateBoard} />
            <Route exact path="/show" component={ShowBoard} />
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
