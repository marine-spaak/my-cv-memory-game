import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './Cards.scss';

import Card from '../Card/Card';
import { flipAllCardsToBackSide } from '../../actions/actions';

function Cards({ cards }) {
  const dispatch = useDispatch();

  // J'importe depuis le state la liste des cartes sélectionnées
  const selectedCardsFromState = useSelector((state) => state.selectedCards);

  // Je vais créer une méthode qui prend en paramètre l'id de la carte à checker
  // Et qui renvoie "true" si cette carte est dans le tableau selectedCardsFromState
  // false sinon

  const checkIfSelected = (thisCardId) => {
    const newArray = selectedCardsFromState.filter((card) => (card.id === thisCardId));
    if (newArray.length > 0) {
      return true;
    }
    if (newArray.length === 0) {
      return false;
    }
  };

  const hasFoundPair = useSelector((state) => state.hasFoundPair);
  // console.log('Has Found a Pair ? ', hasFoundPair);

  const hasPickedTwoCards = (selectedCardsFromState.length >= 2);
  // console.log('Has Picked Two Cards ? ', hasPickedTwoCards);

  // useEffect(() => {
  //   console.log(hasPickedTwoCards, hasFoundPair);
  //   if (hasPickedTwoCards) {
  //     if (hasFoundPair) {
  //       console.log('Là il faut ajouter la paire trouvée à la liste des wins');
  //     }
  //     else {
  //       console.log('Là il faut retourner toutes les cartes');
  //       dispatch(flipAllCardsToBackSide());
  //     }
  //   }
  // }, [hasPickedTwoCards]);

  return (
    <div
      className="Cards"
      onClick={(event) => {
        if (hasPickedTwoCards) {
          console.log(event);
          dispatch(flipAllCardsToBackSide());
        }
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          label={card.label}
          pictureName={card.pictureName}
          pictureSrc={card.pictureSrc}
          cardId={index}
          pairId={card.pairId}
          isSelected={checkIfSelected(index)}
        />
      ))}
    </div>
  );
}

export default Cards;
