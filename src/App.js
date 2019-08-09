import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer'
import CreateBoard from './containers/CreateBoard'
import BoardsList from './components/BoardsList';
import BoardShow from './components/BoardShow';
import { fetchBoards } from './actions/boards';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchBoards()
  }

  render () {
    return (
      <Router>
        <div className="App">

          <div className="App-header">
            <NavBar />
          </div>

          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/boards'
              render={routerProps =>
                <BoardsList
                  boards={this.props.boards} {...routerProps} />}
            />

            <Route exact path='/boards/:boardId'
              render={routerProps =>
                <BoardShow {...routerProps}/>}
            />

          </Switch>

          <div className="grid-container">

            <div className="grid-item">
              <SearchContainer />
            </div>

            <div className="grid-item">
              <CreateBoard />
            </div>

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

export default connect(mapStateToProps, {fetchBoards})(App);
