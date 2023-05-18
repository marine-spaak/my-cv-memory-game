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
      <p>Avez-vous trouvé deux cartes identiques ?</p>
      <p className="Header-result">{(hasFoundPair) ? 'Oui !' : 'Non'}</p>
    </div>
  );
}

export default Header;
