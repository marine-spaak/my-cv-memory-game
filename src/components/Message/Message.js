// J'importe useSelector car j'aurai besoin de chercher des valeurs dans le state
import { useSelector } from 'react-redux';

import './Message.scss';

function Message() {
  // Je récupère la liste des paires déjà trouvées
  const numberOfPairsWon = useSelector((state) => state.numberOfPairsWon);
  const playerHasWon = useSelector((state) => state.playerHasWon);

  return (
    <div className="Message">

      {/* Quand le joueur n'a pas encore gagné */}
      {/* On lui indique combien de paires il a trouvé */}
      {!playerHasWon && (
      <p>Vous avez trouvé <span className="Message-result">{numberOfPairsWon}</span> paire{(numberOfPairsWon > 1) ? 's' : ''} !</p>
      )}

      {/* Quand le joueur a gagné, on lui dit bravo ! */}
      {playerHasWon && (
        <p>🎉 Bravo !!! Vous avez tout trouvé !</p>
      )}

    </div>
  );
}

export default Message;
