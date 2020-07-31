import { combineReducers } from "redux";
import { SELECT_CELL } from "../actions/moves";

const createBoard = (i) =>
  Array(i)
    .fill(undefined)
    .map(_ =>
      Array(i)
        .fill(undefined)
    )

const board = (state = createBoard(3), action) => {
  switch (action.type) {
    case SELECT_CELL: {
      const newBoard = JSON.parse(JSON.stringify(state))
      newBoard[action.row][action.col] = action.currentPlayer
      return newBoard
    }
    default: {
      return state
    }
  }
}

const game = (state = { currentPlayer: 'X', winner: null }, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? '0' : 'X'
      }
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  board,
  game
})
