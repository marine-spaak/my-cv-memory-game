import { useSelector } from 'react-redux';

import './Cards.scss';

import Card from '../Card/Card';

function Cards({ cards }) {
  // J'importe depuis le state la liste des cartes sélectionnées
  const selectedCardsFromState = useSelector((state) => state.selectedCards);

  // Je vais créer une méthode qui prend en paramètre l'id de la carte à checker
  // Et qui renvoie "true" si cette carte est dans le tableau selectedCardsFromState
  // false sinon

  const checkIfSelected = (thisCardId) => {
    selectedCardsFromState.some((card) => card.id === thisCardId);
  };

  console.log(checkIfSelected(1));

  // const hasPickedTwoCards = useSelector((state) => state.hasPickedTwoCards);

  // useEffect(() => {
  //   if (hasPickedTwoCards) {
  //     console.log('Là il faut retourner toutes les cartes');
  //   }
  // }, [hasPickedTwoCards]);

  return (
    <div className="Cards">
      {cards.map((card, index) => (
        <Card
          key={index}
          label={card.label}
          cardId={index}
          pairId={card.pairId}
          isSelected={checkIfSelected(index)}
        />
      ))}
    </div>
  );
}

export default Cards;
