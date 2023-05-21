import { useSelector } from 'react-redux';
import './Message.scss';

function Message() {
  const hasFoundPair = useSelector((state) => state.hasFoundPair);

  return (
    <div className="Message">
      Coucou je suis un message qui s'affiche, c'est merveilleux !
      <p>Avez-vous trouvé deux cartes identiques ?</p>
      <p className="Message-result">{(hasFoundPair) ? 'Oui !' : 'Non'}</p>
    </div>
  );
}

export default Message;
