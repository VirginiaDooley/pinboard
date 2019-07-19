import React, { Component } from 'react';
// This container can render either
import BoardShow from '../components/BoardShow'


class BoardContainer extends Component {

  render() {

      return (
        <div>
          <BoardShow boardImages={this.props.boardImages} />
        </div>
      )
    }
}

export default BoardContainer;
