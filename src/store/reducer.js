import {
  ADD_CARD_TO_SELECTION_LIST, FLIP_ALL_CARDS_TO_BACK_SIDE,
} from '../actions/actions';

const initialState = {
  selectedCards: [],
  previousPairId: -1,
  currentPairId: 0,
  hasFoundPair: false,
  hasPickedTwoCards: false,
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
        hasPickedTwoCards: (state.selectedCards.length === 2),
      };

    // case REMOVE_CARD_FROM_SELECTION_LIST:
    //   return {
    //     ...state,
    //     selectedCards: state.selectedCards.filter((card) => (card.id !== action.payload.cardId)),
    //     previousPairId: state.currentPairId,
    //     currentPairId: action.payload.pairId,
    //   };

    case FLIP_ALL_CARDS_TO_BACK_SIDE:

      return {
        ...state,
        selectedCards: [],
        previousPairId: -1,
        currentPairId: 0,
        hasFoundPair: false,
        hasPickedTwoCards: false,
      };

    default:
      return state;
  }
}

export default reducer;
