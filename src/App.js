import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer'
import BoardsList from './components/BoardsList';
import BoardShow from './components/BoardShow';
import { fetchBoards } from './actions/boards';

class App extends React.Component {
  componentWillMount() {
    this.props.fetchBoards()
    console.log(this.props.boards)
  }

  render() {
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
                  boards={this.props.boards} {...routerProps}/>}
            />
            <Route exact path='/boards/:boardId'
              render={routerProps =>
                <BoardShow {...routerProps}/>}
            />
          </Switch>

          <div>
            <SearchContainer />
          </div>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: state.manageBoards.boards
  }
}

export default connect(mapStateToProps, {fetchBoards})(App);
