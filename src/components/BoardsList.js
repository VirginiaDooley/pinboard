import React from 'react'
import { Link } from 'react-router-dom';

const BoardsList = ({boards}) => {
  const renderBoards = Object.values(boards).map((board, index) => {
    return (
      <li key={index}>
        <Link to={`/boards/${board.id}`}>{board.title}</Link>
      </li>
      )}
    )

  return (
    <div className="grid-container">
      <div className="grid-item">
        <h3>Select a board</h3>
          <ol>
            {renderBoards}
          </ol>
      </div>
    </div>

  );
}

export default BoardsList;
