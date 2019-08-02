import React from 'react';
import { Link } from 'react-router-dom';

const BoardsList = ({boards}) => {
  const renderBoards = boards.map((board, index) =>
  <Link key={index} id={board.id} title={board.title} to={`/boards/${board.id}`}>{board.title}</Link>
)
  return (
    <div>
    {renderBoards}
  </div>
  );
};

export default BoardsList;
