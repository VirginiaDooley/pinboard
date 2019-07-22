import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// App is a parent component
import './App.css';
import NavBar from './components/NavBar';
// SearchContainer is a parent to others but a child component of App
import SearchContainer from './containers/SearchContainer'
import BoardContainer from './containers/BoardContainer'
import CreateBoard from './components/CreateBoard';
import BoardShow from './components/BoardShow';
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
            <Route exact path="/show" component={BoardShow} />
            <Route exact path="/index" component={BoardsList} />

          <div className="Pinboard">
            <div className="row:after">
              <BoardContainer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
