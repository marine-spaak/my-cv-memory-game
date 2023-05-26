import {
  ADD_CARD_TO_SELECTION_LIST, ADD_PAIR_TO_WON_LIST, FLIP_ALL_CARDS_TO_BACK_SIDE,
} from '../actions/actions';

const initialState = {
  selectedCards: [],
  previousPairId: -1,
  currentPairId: 0,
  hasFoundPair: false,
  wonPairs: [],
  // hasPickedTwoCards: false,
  // isPickingThirdCard: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_CARD_TO_SELECTION_LIST:

      return {
        ...state,
        hasFoundPair: (action.payload.pairId === state.currentPairId),
        selectedCards: [...state.selectedCards, {
          id: action.payload.cardId,
          pairId: action.payload.pairId,
        }],
        previousPairId: state.currentPairId,
        currentPairId: action.payload.pairId,
      };

    case ADD_PAIR_TO_WON_LIST:

      return {
        ...state,
        wonPairs: [...state.wonPairs, action.payload.pairId],
      };

    case FLIP_ALL_CARDS_TO_BACK_SIDE:

      return {
        ...state,
        selectedCards: [],
        previousPairId: -1,
        currentPairId: 0,
        hasFoundPair: false,
        // hasPickedTwoCards: (state.selectedCards.length === 2),
        // isPickingThirdCard: (state.selectedCards.length === 3),
      };

    default:
      return state;
  }
}

export default reducer;
