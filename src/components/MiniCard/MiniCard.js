import './MiniCard.scss';

// Import des images
import picturePair1 from 'src/assets/pictures/pair-picture-1.png';
import picturePair2 from 'src/assets/pictures/pair-picture-2.png';
import picturePair3 from 'src/assets/pictures/pair-picture-3.png';
import picturePair4 from 'src/assets/pictures/pair-picture-4.png';
import picturePair5 from 'src/assets/pictures/pair-picture-5.png';
import picturePair6 from 'src/assets/pictures/pair-picture-6.png';

const imagesNames = {
  picturePair1,
  picturePair2,
  picturePair3,
  picturePair4,
  picturePair5,
  picturePair6,
};

function MiniCard({
  // isInWonList signifie qu'on est dans la partie haute,
  cardId, label, pictureName, pairId, isSelected, alreadyWon, isInWonList,
}) {
  return (
    <div
      className={(isInWonList) ? 'MiniCard' : 'hidden'}
    >
      <div className="MiniCard-container">

        <div
          className="MiniCard-itself"
          style={{
            backgroundImage: `url(${imagesNames[pictureName]})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />

      </div>
    </div>
  );
}

export default MiniCard;
