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
      <div className="grid-item">
        <h3>Select a board to view images</h3>
          <ol>
            {renderBoards}
          </ol>
      </div>
    );

  }
}

export default BoardsList;
