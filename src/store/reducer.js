import {
  SAVE_CARDS_INTO_STATE,
  ADD_CARD_TO_SELECTION_LIST,
  ADD_PAIR_TO_WON_LIST,
  FLIP_ALL_CARDS_TO_BACK_SIDE,
} from '../actions/actions';

const initialState = {
  cards: [],
  selectedCards: [],
  previousPairId: -1,
  currentPairId: 0,
  hasFoundPair: false,
  wonPairs: [],
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_CARDS_INTO_STATE:

      return {
        ...state,
        cards: action.payload,
      };

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
        cards: state.cards.map((card) => {
          if (card.pairId === state.currentPairId) {
            return {
              ...card,
              pairPosition: state.wonPairs.length,
            };
          }
          return card;
        }),
        wonPairs: [...state.wonPairs, {
          // J'utilise des objets qui ont un ID et une position (ordre des trouvailles du joueur)
          pairId: action.payload.pairId, pairPosition: state.wonPairs.length,
        }],
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
