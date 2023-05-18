import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Card.scss';
import { addCardToSelectionList } from '../../actions/actions';

function Card({
  cardId, label, pairId, isSelected,
}) {
  const dispatch = useDispatch();

  const handleFirstClickOnCard = () => {
    dispatch(addCardToSelectionList(cardId, pairId));
  };

  const handleSecondClickOnCard = () => {
    console.log('cannot reclick sorry');
  };

  // console.log(cardId, label, pairId, isSelected);

  return (
    <div className="Card">
      <div className="Card-container">

        <div
          className={(isSelected) ? 'Card-itself active' : 'Card-itself'}
          onClick={(isSelected)
            ? () => handleSecondClickOnCard()
            : () => handleFirstClickOnCard(cardId, pairId)}
        >
          <div className="Card-front">
            <p className="Card-label">{label}</p>
            {/* <p className="Card-id">{cardId}</p> */}
            The front
          </div>

          <div className="Card-back">
            <p className="Card-label">{label}</p>
            {/* <p className="Card-id">{cardId}</p> */}
            The back
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
