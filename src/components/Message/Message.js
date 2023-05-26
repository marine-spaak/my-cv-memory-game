// J'importe useSelector car j'aurai besoin de chercher des valeurs dans le state
import { useSelector } from 'react-redux';

import './Message.scss';

function Message() {
  // Je récupère la liste des paires déjà trouvées
  const wonPairsFromState = useSelector((state) => state.wonPairs);

  return (
    <div className="Message">
      <p>Vous avez trouvé <span className="Message-result">{wonPairsFromState.length}</span> paire{(wonPairsFromState.length > 1) ? 's' : ''} !</p>
    </div>
  );
}

export default Message;
