export const ADD_CARD_TO_SELECTION_LIST = 'ADD_CARD_TO_SELECTION_LIST';
export const addCardToSelectionList = (cardId, pairId) => ({
  type: ADD_CARD_TO_SELECTION_LIST,
  payload: {
    cardId: cardId,
    pairId: pairId,
  },
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
