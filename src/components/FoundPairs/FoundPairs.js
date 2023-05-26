import { useDispatch, useSelector } from 'react-redux';

import './FoundPairs.scss';

import Card from '../Card/Card';
import { flipAllCardsToBackSide } from '../../actions/actions';

function FoundPairs({ cards }) {
  const dispatch = useDispatch();

  // J'importe depuis le state ce dont j'ai besoin
  const selectedCardsFromState = useSelector((state) => state.selectedCards);
  const wonPairsFromState = useSelector((state) => state.wonPairs);

  const hasPickedTwoCards = (selectedCardsFromState.length >= 2);

  return (
    <div
      className="FoundPairs"
      onClick={(event) => {
        if (hasPickedTwoCards) {
          // console.log(event);
          dispatch(flipAllCardsToBackSide());
        }
      }}
    >

      <p>Voici la liste des paires déjà trouvées : </p>

      {/* J'affiche la liste des paires gagnées */}
      <div className="FoundPairs-won">
        {cards
          .filter(
            // Je filtre les cartes qui font partie de la liste gagnée
            (card) => wonPairsFromState.includes(card.pairId),
          ).sort(
            // TODO améliorer pour que ce soit trié par ordre de découverte de la paire
            // Et non par ordre des pairID dans le tableau généré au début
            (a, b) => a.pairId - b.pairId,
          ).map((card) => (
            <Card
              key={card.id}
              label={card.label}
              pictureName={card.pictureName}
              pictureSrc={card.pictureSrc}
              cardId={card.id}
              pairId={card.pairId}
              isSelected={false}
              alreadyWon={false}
              isInWonList
            />
          ))}
      </div>

    </div>
  );
}

export default FoundPairs;
