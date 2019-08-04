// actions
const API_URL = 'http://localhost:3000/api/v1/boards'

export const setBoards = boards => {
  return { type: 'SET_BOARDS', boards };
};

export const fetchBoards = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_BOARDS' });

  return fetch(API_URL)
  .then(response => {
    return response.json()
  })
  .then(boards => {
    dispatch(setBoards(boards))})
  .catch(err => console.log(err));
  }
}

export const saveBoard = (board) => {
  return dispatch =>
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(board),
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(res =>
    res.json())
    .then(board =>
      {
        return dispatch({type: 'SAVE_BOARD', payload: board});
      })
      .catch(error => {
        console.log(error);
        alert("Board save failed, please try again!");
      })
    }

    // #show
    // export const showBoard = boardId => ({
    // return (dispatch) => {
    //     dispatch({ type: 'LOADING_BOARD' });
    //   return fetch(`${API_URL}/boards`)
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => dispatch({ type: 'SHOW_BOARD', payload: data.boards}))
    //   .catch(err => console.log(err));
    //   }
    // })


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
