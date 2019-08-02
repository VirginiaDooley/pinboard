///reducer; returns a new state///

const initialState = {
  loading:false,
  boards: [],
  boardImages:[]
}

export default (state = initialState, action) => {
  console.log(action)

  switch (action.type) {

    case 'ADD_IMAGE_TO_BOARD': {
  // debugger
      return { ...state, boardImages:
        [...state.boardImages, action.newBoardImages]};
    }

    case 'SAVE_BOARD': {
      debugger
      return { ...state, boards: [...state.boards, action.payload]};
    }


    // case 'BOARD_INDEX': {
    //
    // }

    // case 'SHOW_BOARD': {
    //
    // }
    //

    // case 'CREATE_BOARD': {
    //
    // }


    default:
      return state;
  }
};
