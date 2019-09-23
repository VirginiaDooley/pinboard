import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardsList extends Component {

  constructor(props) {
    super(props)
      this.state = {
        boards: this.props.boards
      }
  }

  componentDidMount() {
    let boards = this.props.boards;
    boards = boards.map(board => Object.assign({}, board, { likes: 0 }))
    this.setState({
      boards: boards
    })
  }

  increaseLikes = (board_id) => {
    const boards = this.state.boards

    let index = boards.findIndex((board) =>
      board.id === board_id
    )
    let board = boards[index];

    this.setState({
      boards:
        [
        ...boards.slice(0, index),
        Object.assign({}, board, { likes: board.likes + 1 }),
        ...boards.slice(index + 1)
        ]
      });
  }

   render() {
      console.log(this.state)
       const {boards} = this.state

       const renderBoards = boards.map((board) =>
         <li key={board.id}>
           <Link to={`/boards/${board.id}`}>{board.title}</Link>
             <div>
               <button onClick={() => this.increaseLikes(board.id)}> + {board.likes}</button>
             </div>
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
