import React from 'react'

const BoardShow = ({boards, match}) => {

  const board = boards.find(board => {
    if (board.id === parseInt(match.params.boardId)) {
      return board
     }
     // add error message?
   })
  console.log(board)

  const renderImages = () => board.images.map(image =>
      <img
       key={image.id}
       src={image.url}
       alt={image.description}
     />
  )

  return (

   <div className="grid-item">
     <h3>Board Title: {board.title}</h3>
     {renderImages()}
   </div>

  )
}

export default BoardShow;
