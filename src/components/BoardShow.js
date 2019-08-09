import React from 'react'

const BoardShow = ({boards, match}) => {

  // const renderImages = () => props.boards.map(image =>
  // <img
  //    key={image.id}
  //    src={image.url}
  //    alt={image.description}
  //  />)

  const board = boards.find(board => {
    if (board.id === parseInt(match.params.boardId)) {
      return board
     }
   })
  console.log(board)
  return (
   <div className="grid-item">
     <h3>Board Title: {board.title}</h3>
   </div>
  )
}

export default BoardShow;
