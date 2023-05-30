import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import './Card.scss';

// Import des images
import picturePair1 from 'src/assets/pictures/pair-picture-1.png';
import picturePair2 from 'src/assets/pictures/pair-picture-2.png';
import picturePair3 from 'src/assets/pictures/pair-picture-3.png';
import picturePair4 from 'src/assets/pictures/pair-picture-4.png';
import picturePair5 from 'src/assets/pictures/pair-picture-5.png';
import picturePair6 from 'src/assets/pictures/pair-picture-6.png';

import { selectCard, updatePairId } from '../../actions/actions';

const imagesNames = {
  picturePair1,
  picturePair2,
  picturePair3,
  picturePair4,
  picturePair5,
  picturePair6,
};

// L'objectif est d'avoir une prop "isSelected" qui dira pour chaque carte
// si elle est en cours de sélection (donc face visible) - ou non

// Et également une prop "isWon" qui dirait si elle a été gagnée
// (modification de son affichage également - par exemple en opacité réduite)
function Card({
  cardId, pairId, label, pictureName, isSelected, isWon,
}) {
  const dispatch = useDispatch();

  // Ce handler est appelé chaque fois qu'on clique sur une carte
  const handleClickOnCard = () => {
    if (isWon) {
      console.log ('cette carte a déjà été gagnée');
    }

    if (!isWon && !isSelected) {
      dispatch(selectCard(cardId));
      dispatch(updatePairId(pairId));
    }
  };

  // La fonction suivante permet de définir la classe de la carte selon son statut
  // (cliquée, non cliquée, gagnée etc)
  // Cela servira à appliquer du CSS uniquement
  const setCardClassName = () => {
    if (isWon) {
      return 'Card-itself won';
    }
    return (isSelected) ? 'Card-itself active' : 'Card-itself';
  };

  return (
    <div
      className="Card"
    >
      <div className="Card-container">

        <div
          className={setCardClassName()}
          onClick={() => handleClickOnCard()}
        >
          <div className="Card-front">
            <p className="Card-filigrane">Memory</p>
            {/* <p className="Card-spoiler">{label}</p> */}
          </div>

          <div
            className="Card-back"
            style={{
              backgroundImage: `url(${imagesNames[pictureName]})`,
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />

        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  pairId: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  pictureName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isWon: PropTypes.bool.isRequired,
};

export default Card;
