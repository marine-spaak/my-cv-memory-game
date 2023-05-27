import { useSelector } from 'react-redux';

import './FoundPairs.scss';

import MiniCard from '../MiniCard/MiniCard';

function FoundPairs() {
  // J'importe depuis le state ce dont j'ai besoin
  const cards = useSelector((state) => state.cards);

  const sortedArrayOfWinningPairs = cards.filter(
    // Je filtre les cartes qui font partie de la liste gagnée
    (card) => (card.pairPosition !== undefined),
  ).sort(
    // TODO améliorer pour que ce soit trié par ordre de découverte de la paire
    // Et non par ordre des pairID dans le tableau généré au début
    (a, b) => a.pairPosition - b.pairPosition,
  ).filter((card, index) => (
    index % 2 === 1));

  return (
    <div
      className="FoundPairs"
    >

      <p className="FoundPairs-header">Voici la liste des paires déjà trouvées : </p>

      {/* J'affiche la liste des paires gagnées */}
      <div className="FoundPairs-won">
        {sortedArrayOfWinningPairs
          .map((card) => (
            <MiniCard
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
