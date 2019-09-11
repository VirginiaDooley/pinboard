// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import BoardsList from '../components/BoardsList'
//
// class Boards extends Component {
//
//   constructor(props){
//    super(props);
//    // initial state
//        this.state = {
//          likes : 0
//        }
//     }
//
//   increaseLikes = (board_id) => {
//
//     const newBoards = this.props.boards
//
//     let index = newBoards.findIndex((board) =>
//       board.id === board_id
//     )
//     let board = newBoards[index];
//
//     this.setState({
//       boards:
//         [
//         ...newBoards.slice(0, index),
//         Object.assign({}, board, { likes: board.likes =+ 1 }),
//         ...newBoards.slice(index + 1)
//         ]
//       });
//   }
//
//    render() {
//
//        const {boards} = this.props;
//
//
//
//        // const renderBoards = Object.values(boards).map((board) =>
//        //   <li key={board.id}>
//        //     <Link to={`/boards/${board.id}`}>{board.title}</Link>
//        //       <button onClick={(event) => this.increaseLikes(board.id, event)}> + {board.likes}</button>
//        //   </li>
//        )
//
//       return (
//
//         <div className="grid-container">
//           <div className="grid-item">
//
//             <h3>Boards:</h3>
//             {boards.map(board = >
//               <ol>
//                 <BoardsList key={board.id} increaseLikes={this.increaseLikes} board={board}/>
//               </ol>
//             )}
//           </div>
//         </div>
//
//       )
//   }
// }
//
// export default Boards;
