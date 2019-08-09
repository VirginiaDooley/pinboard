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

// #create
export const saveBoard = (board) => {
  return dispatch => {
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(board),
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(newBoard => {
      dispatch({type: 'SAVE_BOARD', payload: newBoard});
        alert("Success!");
      })
    .catch(error => {
        console.log(error);
        alert("Board save failed, please try again!");
    })
  }
}
