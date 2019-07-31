// actions

const API_URL = 'http://localhost:3001/api/v1/boards'
export const saveBoard = board => {
  debugger
return dispatch =>
 fetch(API_URL, {
   headers: { 'Accept': 'application/json',
   'Content-Type': 'application/json'},
   method: "POST",
   body: board
  })
  .catch(error => {
    console.log(error);
    alert("Board save failed, please try again!");
  })
  .then(results =>
      results.json())
    .then(board =>
      {
      debugger
        return dispatch({type: 'SAVE_BOARD', payload: board});
      });
}

// #index
// export const boardList = () => ({
//
// build fetch request
// })

// #new
// export const createBoard = () => ({
//
// })

// #show
// export const showBoard = boardId => ({
//
// build fetch request
// })





// this is an action which is a JS object
// export const addImage = image => ({
//   type: 'ADD_IMAGE',
//   newImage: [...this.state.boardImages, event.target.src]
// })


// export const addImage = image => {
//   return { type: 'ADD_IMAGE', image };
// };
//
// const API_URL = 'http://localhost:3001';
// export function showBoard() {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_BOARD' });
//
//   return fetch(`${API_URL}/boards`)
//   .then(response => {
//     return response.json()
//   })
//   .then(data => dispatch({ type: 'SHOW_BOARD', payload: data.boards}))
//   .catch(err => console.log(err));
//   }
// }


// export const createBoard = (boards, routerHistory) => {
//   return dispatch => {
//     return fetch(`${API_URL}/boards`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ board })
//     })
//     .then(res => res.json())
//     .then(board => {
//       if (board.id) {
//           dispatch({ type: 'CREATE_BOARD', payload: board.id}));
//           routerHistory.push(`${board.id}`);
//       } else {
//         const err = board.errors.join('\n\n')
//         alert(`${board.message}\n\n${err}`)
//       }
//     }).catch(err => console.log(err));
//   };
// };
//
