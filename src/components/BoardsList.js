import { Link } from 'react-router-dom';
import React, {Component} from 'react'

class BoardsList extends Component {
  render () {
    const {boards} = this.props;
    const renderBoards = Object.values(boards).map((board, index) => {
      return (
      <li key={index}>
        <Link to={`/boards/${board.id}`}>{board.title}</Link>
      </li>
      )}
  )

    return (
      <div>
        <h1>Select a board to view images</h1>
        <ol>
          {renderBoards}
        </ol>
      </div>
    );

  }
}

export default BoardsList;
