import React, { Component } from 'react';
import Board from '../components/Board'

class BoardContainer extends Component {

  constructor(){
    super()
      this.state = {
      board: [],
    }
  }

  render () {
    return (
      <div className="board">
        <Board board={this.state.board} />
      </div>
    )
  }
}

export default BoardContainer;
