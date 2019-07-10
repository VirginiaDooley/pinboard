import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import PinBoardContainer from './containers/PinBoardContainer'
import SearchContainer from './containers/SearchContainer'
import NewBoard from './components/NewBoard';
import SaveBoard from './components/SaveBoard';
import DeleteBoard from './components/DeleteBoard';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App">
          <div class="App-header">
            <NavBar />
          </div>
          <div class="column">
            <SearchContainer />
          </div>

            <Route exact path="/new" component={NewBoard} />
            <Route exact path="/save" component={SaveBoard} />
            <Route exact path="/delete" component={DeleteBoard} />

          <div className="Pinboard">
            <div class="row:after">
              <PinBoardContainer />
            </div>
          </div>


        </div>
      </Router>
    );
  }
}

export default App;
