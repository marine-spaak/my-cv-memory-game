import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import './Header.scss';

function Header() {
  const selectedCardsFromState = useSelector((state) => state.selectedCards);
  const hasFoundPair = useSelector((state) => state.hasFoundPair);
  useEffect(() => {
    (hasFoundPair) ? console.log("c'est gagné !!!") : console.log("nope");
  }, [hasFoundPair]);
  const displaySelectedCards = () => {
    console.log(selectedCardsFromState);
  };

  return (
    <div className="Header">
      <h1 className="Header-title">Mon CV en mémory</h1>
      <button type="button" onClick={displaySelectedCards}>afficher les cartes sélectionnées</button>
      <p>Avez-vous trouvé deux cartes identiques ?</p>
      <p>{(hasFoundPair) ? 'Oui !' : 'Non'}</p>
    </div>
  );
}

export default Header;
