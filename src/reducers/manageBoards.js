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

    // case 'CREATE_BOARD': {
    //
    // }
    //
    // case 'SAVE_BOARD': {
    //
    // }

    // case 'SHOW_BOARD': {
    //
    // }
    //
    // case 'BOARD_INDEX': {
    //
    // }

    default:
      return state;
  }
};
