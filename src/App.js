import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux'
import { Col, Row, Container } from 'reactstrap';
import './App.css';
import NavBar from './components/NavBar';
import SearchContainer from './containers/SearchContainer'
import BoardContainer from './containers/BoardContainer'
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

          <div className="grid-container">

            <div className="grid-item">
              <SearchContainer />
            </div>

            <div className="grid-item">
              <BoardContainer />
            </div>
          
        </div>

            <Route exact path='/boards'
            render={routerProps =>
              <BoardsList
                boards={this.props.boards} {...routerProps} />}
                />


              <Route exact path='/boards/:boardId'
              render={routerProps =>
                <BoardShow
                  boards={this.props.boards} {...routerProps}/>}
                />

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
