import {
  SAVE_CARDS_INTO_STATE,
  SELECT_CARD,
  CONSIDER_AS_WON,
  UNSELECT_CARDS_FROM_ARRAY_OF_IDS,
  UPDATE_PAIR_ID,
  FLIP_ALL_CARDS_TO_BACK_SIDE,
  CLOSE_MODAL,
} from '../actions/actions';

const initialState = {
  cards: [],
  selectedCards: [],
  previousPairId: -1,
  currentPairId: 0,
  numberOfPairsWon: 0,
  playerHasWon: false,
  isModalActive: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_CARDS_INTO_STATE:

      return {
        ...state,
        cards: action.payload,
      };

    // L'objectif du case "SELECT_CARD"
    // Est de changer le 'isSelected' de la carte cliquée en 'true'
    case SELECT_CARD:

      return {
        ...state,
        // Dans cards, je trouve la carte cliquée (id stocké en payload)
        cards: state.cards.map((card) => (
          (card.id === action.payload)

            // Je change son 'isSelected' en true
            ? {
              ...card,
              isSelected: true,
            }

            // Si ce n'est pas la bonne carte, je ne change rien
            : card
        )),
      };

    case UPDATE_PAIR_ID:

      return {
        ...state,
        previousPairId: state.currentPairId,
        currentPairId: action.payload,
      };

    case FLIP_ALL_CARDS_TO_BACK_SIDE:

      return {
        ...state,
        selectedCards: [],
        previousPairId: -1,
        currentPairId: 0,
        hasFoundPair: false,
      };

    // L'objectif du case "UNSELECT_CARDS_FROM_ARRAY_OF_IDS" est de prendre un tableau,
    // et de changer le 'isSelected' de toutes les cartes du tableau en 'false'
    case UNSELECT_CARDS_FROM_ARRAY_OF_IDS:

      return {
        ...state,
        // Dans cards, je trouve la carte cliquée (id stocké en payload)
        cards: state.cards.map((card) => (
          (action.payload.includes(card.id))
            // Je change son 'isSelected' en false
            ? {
              ...card,
              isSelected: false,
            }
            : card
        )),
      };

    // L'objectif du case "CONSIDER_AS_WON" est de prendre un tableau d'IDs,
    // et de changer le 'isWon' de toutes les cartes du tableau en 'true'
    case CONSIDER_AS_WON:
      return {
        ...state,
        cards: state.cards.map((card) => (
          (action.payload.includes(card.id))
            ? {
              ...card,
              isWon: true,
              pairPosition: state.numberOfPairsWon,
            }
            : card
        )),
        numberOfPairsWon: state.numberOfPairsWon + 1,
        isModalActive: true,

        // 🥳 SUCCESS
        // Quand je gagne une paire supplémentaire,
        // Je check si le joueur a tout gagné
        // Je suis obligée de faire -1 car à ce stade la dernière paire gagnée
        // n'a pas encore été ajoutée à la liste
        playerHasWon: ((state.cards.length / 2) - 1 === state.numberOfPairsWon),
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalActive: false,
      };

    default:
      return state;
  }
}

export default reducer;
