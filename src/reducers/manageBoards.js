///reducer; returns a new state///

const initialState = {
  loading: false,
  boardImages: []
}

export default (state = initialState, action) => {

  switch (action.type) {

    case 'ADD_IMAGE_TO_BOARD': {
  // debugger
      return { boardImages:
        [...state.boardImages, action.newBoardImages]};
    }

    case 'SAVE_BOARD': {
      return { ...state, board: action.payload
      }
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
