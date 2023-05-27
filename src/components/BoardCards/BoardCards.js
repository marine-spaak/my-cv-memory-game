import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './BoardCards.scss';

import Card from '../Card/Card';
import { flipAllCardsToBackSide, addPairToWonList } from '../../actions/actions';

function BoardCards() {
  const dispatch = useDispatch();

  // J'importe depuis le state ce dont j'ai besoin
  const cards = useSelector((state) => state.cards);
  const selectedCardsFromState = useSelector((state) => state.selectedCards);
  const wonPairsFromState = useSelector((state) => state.wonPairs);
  const hasFoundPair = useSelector((state) => state.hasFoundPair);
  const currentPairId = useSelector((state) => state.currentPairId);

  useEffect(() => {
    if (hasFoundPair) {
      // Dispatcher une action pour ajouter la paire actuelle
      // Dans la liste des PairsWonByPlayer (ou cardsWonByPlayer)
      dispatch(addPairToWonList(currentPairId));
    }
  }, [hasFoundPair]);

  // Je vais créer une méthode qui prend en paramètre l'id de la carte à checker
  // Et qui renvoie "true" si cette carte est dans le tableau selectedCardsFromState
  // false sinon

  const hasPickedTwoCards = (selectedCardsFromState.length >= 2);

  const checkIfSelected = (thisCardId) => {
    const newArray = selectedCardsFromState.filter((card) => (card.id === thisCardId));
    if (newArray.length > 0) {
      return true;
    }
    if (newArray.length === 0) {
      return false;
    }
  };

  return (
    <div
      className="BoardCards"
      onClick={(event) => {
        if (hasPickedTwoCards) {
          // console.log(event);
          dispatch(flipAllCardsToBackSide());
        }
      }}
    >

      <div className="BoardCards-playing">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            label={card.label}
            pictureName={card.pictureName}
            pictureSrc={card.pictureSrc}
            cardId={card.id}
            pairId={card.pairId}
            // TODO check si je garde index ou id ici
            isSelected={checkIfSelected(index)}
            alreadyWon={wonPairsFromState.includes(card.pairId)}
            isInWonList={false}
          />
        ))}
      </div>

    </div>
  );
}

export default BoardCards;
