import React, { Component } from 'react';
// This container can render either
import BoardShow from '../components/BoardShow'


class BoardContainer extends Component {

  render() {

      return (
        <div>
          <BoardShow />
        </div>
      )
    }
}

export default BoardContainer;
