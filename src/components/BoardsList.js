import React from 'react';
import { Link } from 'react-router-dom';

const BoardsList = ({boards}) => {
  const renderBoards = boards.map((board, index) =>
  <ol>
    <li>
      <Link key={index} id={board.id} title={board.title} to={`/boards/${board.id}`}>{board.title}</Link>
    </li>
  </ol>
)

  return (
    <div>
      {renderBoards}
    </div>
  );
};

export default BoardsList;
