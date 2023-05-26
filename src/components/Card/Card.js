import { useDispatch } from 'react-redux';

import './Card.scss';

// Import des images
import picturePair1 from 'src/assets/pictures/pair-picture-1.png';
import picturePair2 from 'src/assets/pictures/pair-picture-2.png';
import picturePair3 from 'src/assets/pictures/pair-picture-3.png';
import picturePair4 from 'src/assets/pictures/pair-picture-4.png';
import picturePair5 from 'src/assets/pictures/pair-picture-5.png';
import picturePair6 from 'src/assets/pictures/pair-picture-6.png';

import { addCardToSelectionList } from '../../actions/actions';

const imagesNames = {
  picturePair1,
  picturePair2,
  picturePair3,
  picturePair4,
  picturePair5,
  picturePair6,
};

function Card({
  cardId, label, pictureName, pairId, isSelected, alreadyWon, isInWonList,
}) {
  const dispatch = useDispatch();
  const handleFirstClickOnCard = () => {
    dispatch(addCardToSelectionList(cardId, pairId));
  };

  const handleSecondClickOnCard = () => {
    console.log('cannot reclick sorry');
  };

  const setCardClassName = () => {
    if (alreadyWon) {
      return 'Card-itself already-won';
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
          onClick={(isSelected)
            ? () => handleSecondClickOnCard()
            : () => handleFirstClickOnCard(cardId, pairId)}
        >
          <div className={isInWonList ? 'Card-front isInWonList' : 'Card-front'}>
            <p className="Card-label">{label}</p>
            <p className="Card-id">{cardId}</p>
            <p>The front</p>
          </div>

          <div
            className="Card-back"
            style={{
              background: `url(${imagesNames[pictureName]})`,
              backgroundSize: '90%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <p className="Card-label">{label}</p>
            <p className="Card-id">{cardId}</p>
            The back
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
