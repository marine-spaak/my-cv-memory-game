import { useDispatch, useSelector } from 'react-redux';

import './BoardCards.scss';

import { useEffect } from 'react';
import {
  unselectCardsFromArrayOfIds,
  considerAsWon,
} from '../../actions/actions';

import Card from '../Card/Card';

function BoardCards() {
  const dispatch = useDispatch();
  // J'importe depuis le state ce dont j'ai besoin (la liste des cartes)
  const cardsFromState = useSelector((state) => state.cards);

  // Je stocke les IDs des cartes sélectionnées
  const selectedCardsIds = cardsFromState
    .filter((card) => (card.isSelected))
    .map((card) => (card.id));

  // =======================================================
  // Fonction checkant si 2 cartes forment une paire 🃏🃏❓
  // =======================================================
  const formsAPair = (firstCardId, secondCardId) => (cardsFromState[firstCardId].pairId
    === cardsFromState[secondCardId].pairId);

  // =================================================================================
  // 🃏🔄 Gestion des cartes sélectionnées et du retournement après 2 cartes cliquées
  // =================================================================================
  // #region
  // Je surveille quand les cartes sélectionnées changent (useEffect sur selectedCardsIds)
  useEffect(() => {
    // S'il y en a deux, je vais vérifier si c'est une paire ou non
    if (selectedCardsIds.length === 2) {
      // =============================================
      // 🃏🃏✅ Si ces deux cartes ont le meme pairId
      // =============================================
      if (formsAPair(selectedCardsIds[0], selectedCardsIds[1])) {
        setTimeout(() => {
          dispatch(considerAsWon(selectedCardsIds));
          dispatch(unselectCardsFromArrayOfIds(selectedCardsIds));
        }, 500);
      }

      // =====================================================
      // 🃏🃏❌ Si ces deux cartes ont des pairIds différents
      // =====================================================
      else {
        // Après un délai d'1 sec
        setTimeout(() => {
          // Je dé-sélectionne les cartes si le tableau envoyé en argument contient leur ID
          dispatch(unselectCardsFromArrayOfIds(selectedCardsIds));
        }, 1000);
      }
    }
  }, [selectedCardsIds]);
  // #endregion

  return (
    <div
      className="BoardCards"
    >

      <div className="BoardCards-playing">
        {cardsFromState.map((card) => (
          <Card
            key={card.id}
            cardId={card.id}
            pairId={card.pairId}
            label={card.label}
            pictureName={card.pictureName}
            isSelected={card.isSelected}
            isWon={card.isWon}
          />
        ))}
      </div>

    </div>
  );
}

export default BoardCards;
