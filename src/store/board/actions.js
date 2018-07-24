export const BOARD_SET_SQUARE = 'BOARD/SET_SQUARE';
export const BOARD_SET_INITIAL_PLAYER = 'BOARD/SET_INITIAL_PLAYER';

export const boardSet = payload => ({
  type: BOARD_SET_SQUARE,
  payload,
});
