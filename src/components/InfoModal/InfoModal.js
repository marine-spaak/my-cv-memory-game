import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '../../actions/actions';

import './InfoModal.scss';

function InfoModal() {
  const isModalActive = useSelector((state) => state.isModalActive);
  const cards = useSelector((state) => state.cards);
  const numberOfPairsWon = useSelector((state) => state.numberOfPairsWon);

  // Fonction pour chercher l'objet correspondant à la dernière paire gagnée
  const fetchInfoOfLastPairWon = () => {
    // Si j'ai au moins gagné une paire
    if (numberOfPairsWon > 0) {
      // Je trie mon tableau cards par pairPosition croissant
      const sortedCards = cards.filter(
        (card) => (card.pairPosition !== undefined),
      ).sort(
        (a, b) => b.pairPosition - a.pairPosition,
      );

      // Je récupère le pairId correspondant à la dernière paire gagnée
      // (en premier dans le tableau)
      const lastPairId = sortedCards[0].pairId;

      const infoOfLastPairWon = cards
        .find((card) => (card.pairId === lastPairId))
        .info;

      return infoOfLastPairWon;
    }

    return undefined;
  };

  const dispatch = useDispatch();

  return (
    <div
      className={isModalActive ? 'InfoModal' : 'InfoModal hidden'}
    >
      <span
        className="InfoModal-close-button"
        onClick={() => dispatch(closeModal())}
      >
        x
      </span>

      <p>
        {(fetchInfoOfLastPairWon() !== undefined) ? fetchInfoOfLastPairWon() : 'non trouvée'}
      </p>

    </div>
  );
}

export default InfoModal;
