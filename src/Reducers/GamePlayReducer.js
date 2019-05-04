import {
  RESET_GAME,
  SET_POSITION_ON_GAME,
  SET_DICE_TOTAL,
  SET_GAME_MODE,
  SET_LAST_ENTERED_NUMBER,
  SCRATCHED_ROLLED
} from '../Actions/GamePlayActions'
import { horses } from '../Data/Horses';
import { numberOfDecks } from '../Data/Decks';

const defaultHistoryEntry = {
  forwardNumbers: [],
  winner: null,
  paidAmount: 40 * numberOfDecks,
  scratchedNumbers: []
}

export const initialGameState = {
  horsePositions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  lastRoll: undefined,
  numberInputMode: true,
  lastEnteredNumber: undefined,
  history: JSON.parse(localStorage.getItem('history')) || [defaultHistoryEntry],
  gameNumberIndex: JSON.parse(localStorage.getItem('history')) ? Object.keys(JSON.parse(localStorage.getItem('history'))).length : 0,
  winner: undefined,
  paidAmount: 40 * numberOfDecks
};

const resetGameState = {
  horsePositions: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  lastRoll: undefined,
  numberInputMode: true,
  lastEnteredNumber: undefined,
  winner: undefined,
  paidAmount: 40 * numberOfDecks
}

export function gamePlayReducer(state = initialGameState, action) {
  switch (action.type) {
    case RESET_GAME:
      const nextgameNumberIndex = state.gameNumberIndex + 1;
      let history = state.history;
      if (!state.history[state.gameNumberIndex]) {
        history[state.gameNumberIndex] = defaultHistoryEntry;
      }
      return { ...state, ...resetGameState, history: history, gameNumberIndex: nextgameNumberIndex };
    case SET_POSITION_ON_GAME:
      const squarePosition = action.data.squarePosition;
      const postPosition = action.data.postPosition
      const higherHorses = state.horsePositions.slice(postPosition - 1);
      const lowerHorses = state.horsePositions.slice(0, postPosition - 2);
      const updatedHosePositions = lowerHorses.concat([squarePosition]).concat(higherHorses);
      history = state.history;
      if (state.history[state.gameNumberIndex]) {
        if (squarePosition < -1) {
          const thisGameScratchedHistory = state.history[state.gameNumberIndex].scratchedNumbers ? [...state.history[state.gameNumberIndex].scratchedNumbers] : [];
          history[state.gameNumberIndex].scratchedNumbers = [...thisGameScratchedHistory, postPosition]
        } else {
          const thisGameForwardHistory = state.history[state.gameNumberIndex].forwardNumbers ? [...state.history[state.gameNumberIndex].forwardNumbers] : [];
          history[state.gameNumberIndex].forwardNumbers = [...thisGameForwardHistory, postPosition];
        }
      } else {
        if (squarePosition < -1) {
          const thisGameScratchedHistory = [postPosition];
          history[state.gameNumberIndex] = { scratchedNumbers: thisGameScratchedHistory, winner: null, paidAmount: 40 * numberOfDecks, forwardNumbers: []}
        } else {
          const updatedGameRollHistory = [postPosition];
          history[state.gameNumberIndex] = { forwardNumbers: updatedGameRollHistory, winner: null, paidAmount: 40 * numberOfDecks, scratchedNumbers: [] };
        }
      }
      const horseLaneLength = horses.find(horse => horse.postPosition === postPosition).laneLength - 1;
      let winner = null;
      if (horseLaneLength === squarePosition) {
        winner = postPosition;
        history[state.gameNumberIndex].winner = postPosition;
      }
      localStorage.setItem('history', JSON.stringify(history));
      return { ...state, horsePositions: updatedHosePositions, history, winner };
    case SET_DICE_TOTAL:
      return { ...state, lastRoll: action.data };
    case SET_LAST_ENTERED_NUMBER:
      return { ...state, lastEnteredNumber: action.data };
    case SET_GAME_MODE:
      return { ...state, numberInputMode: action.data };
    case SCRATCHED_ROLLED:
      const paidAmount = state.paidAmount + action.data.paidAmount;
      history = state.history;
      history[state.gameNumberIndex].paidAmount = paidAmount;
      if (state.history[state.gameNumberIndex].scratchedNumbers) {
        const currentScratched = history[state.gameNumberIndex].scratchedNumbers;
        history[state.gameNumberIndex].scratchedNumbers = [...currentScratched, action.data.diceInput];
      } else {
        history[state.gameNumberIndex].scratchedNumbers = [action.data.diceInput];
      }

      localStorage.setItem('history', JSON.stringify(history));
      return { ...state, history, paidAmount };
    default:
      return state;
  }
}
