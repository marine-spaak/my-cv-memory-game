import './App.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import cardsData from '../../assets/data/cardsData';

import Header from '../Header/Header';
import Message from '../Message/Message';
import InfoModal from '../InfoModal/InfoModal';
import FoundPairs from '../FoundPairs/FoundPairs';
import BoardCards from '../BoardCards/BoardCards';

import { saveCardsIntoState } from '../../actions/actions';

function App() {
  const dispatch = useDispatch();

  // 🃏🃏 Je crée une paire à partir de chaque modèle de carte
  const doubleCards = [...cardsData, ...cardsData];

  // 🔀 Je mélange le tableau pour que l'ordre change à chaque partie
  const shuffledCards = doubleCards.sort(() => Math.random() - 0.5);

  // 🏷️ Je crée une copie du tableau précédent en rajoutant un id à chaque carte
  // l'id d'une carte correspond à sa position dans le tableau shuffledCards
  const shuffledCardsWithId = shuffledCards.map((card, index) => (
    {
      ...card,
      id: index,
    }
  ));

  useEffect(() => {
    dispatch(saveCardsIntoState(shuffledCardsWithId));
  }, []);

  return (
    <div
      className="App"
    >
      <Header />
      <Message />
      <InfoModal />
      <FoundPairs />
      <BoardCards />
    </div>
  );
}

export default App;
