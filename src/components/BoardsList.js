import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardsList extends Component {

  constructor(props) {
    super(props)

    this.state = {boards: this.props.boards}
    console.log(this.props.boards)
  }

  increaseLikes = (board_id) => {

    const newBoards = this.props.boards

    let index = newBoards.findIndex((board) =>
      board.id === board_id
    )
    let board = newBoards[index];

    debugger
// if board does not have likes key, then assign it one and set it equal to 0
    if (!board.likes) {
      board =
        Object.assign({}, board, { likes: 0 })
        console.log(board)
    }

    this.setState({
      boards:
        [
        ...newBoards.slice(0, index),
        Object.assign({}, board, { likes: board.likes =+ 1 }),
        ...newBoards.slice(index + 1)
        ]
      });
  }

   render() {
      console.log(this.state)
       const {boards} = this.state

       const renderBoards = boards.map((board) =>
         <li key={board.id}>
           <Link to={`/boards/${board.id}`}>{board.title}</Link>
             <button onClick={() => this.increaseLikes(board.id)}> + {board.likes}</button>
         </li>
       )

      return (

        <div className="grid-container">
          <div className="grid-item">

            <h3>Boards:</h3>
              <ol>
                {renderBoards}
              </ol>

          </div>
        </div>

      )
  }
}

export default BoardsList;
