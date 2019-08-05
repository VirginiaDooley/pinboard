import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'
// App is a parent component
import './App.css';
import NavBar from './components/NavBar';
// SearchContainer is a parent to others but a child component of App
import SearchContainer from './containers/SearchContainer'
import BoardContainer from './containers/BoardContainer'
import BoardsPage from './components/BoardsPage';
import BoardShow from './components/BoardShow';

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

          <Route exact path="/show" component={BoardShow} />
          <Route exact path="/boards" render={boards =>
              <BoardsPage {...boards} boards={this.props.boards} />} />

            <div className="grid-container">
              <BoardContainer />
            </div>
            </div>
        </Router>
      );
    }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    boards: state.manageBoards.boards
  }
}

export default connect(mapStateToProps)(App);
