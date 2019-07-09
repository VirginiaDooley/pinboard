import React, { Component } from 'react';
import PinBoard from '../components/PinBoard'

class PinBoardContainer extends Component {

  constructor(){
    super()
      this.state = {
      board: [],
    }
  }

  render () {
    return (
      <div className="board">
        <PinBoard board={this.state.board} />
      </div>
    )
  }
}

export default PinBoardContainer;
