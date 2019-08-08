import React, {Component} from 'react'

class BoardShow extends Component {
 render () {
   const {boards, match} = this.props;
   const board = boards.find(board => {
     if (board.id === parseInt(match.params.boardId)) {
       return board
      }
    })
   console.log(board)
   return (
    <div className="grid-item">
      <h5>Board Title: {board.title}</h5>
      <img alt={board.description} src={board.src}>{board.src}</img>
    </div>
   )
 }
}

export default BoardShow;
