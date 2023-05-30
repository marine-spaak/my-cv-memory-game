export const SAVE_CARDS_INTO_STATE = 'SAVE_CARDS_INTO_STATE';
export const saveCardsIntoState = (cardsArray) => ({
  type: SAVE_CARDS_INTO_STATE,
  payload: cardsArray,
});

export const SELECT_CARD = 'SELECT_CARD';
export const selectCard = (cardId) => ({
  type: SELECT_CARD,
  payload: cardId,
});

export const CONSIDER_AS_WON = 'CONSIDER_AS_WON';
export const considerAsWon = (arrayOfIds) => ({
  type: CONSIDER_AS_WON,
  payload: arrayOfIds,
});

export const UPDATE_PAIR_ID = 'UPDATE_PAIR_ID';
export const updatePairId = (pairId) => ({
  type: UPDATE_PAIR_ID,
  payload: pairId,
});

export const REMOVE_CARD_FROM_SELECTION_LIST = 'REMOVE_CARD_FROM_SELECTION_LIST';
export const removeCardFromSelectionList = (cardId, pairId) => ({
  type: REMOVE_CARD_FROM_SELECTION_LIST,
  payload: {
    cardId: cardId,
    pairId: pairId,
  },
});

export const FLIP_ALL_CARDS_TO_BACK_SIDE = 'FLIP_ALL_CARDS_TO_BACK_SIDE';
export const flipAllCardsToBackSide = () => ({
  type: FLIP_ALL_CARDS_TO_BACK_SIDE,
});

export const UNSELECT_CARDS_FROM_ARRAY_OF_IDS = 'UNSELECT_CARDS_FROM_ARRAY_OF_IDS';
export const unselectCardsFromArrayOfIds = (arrayOfIds) => ({
  type: UNSELECT_CARDS_FROM_ARRAY_OF_IDS,
  payload: arrayOfIds,
});

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = () => ({
  type: CLOSE_MODAL,
});
