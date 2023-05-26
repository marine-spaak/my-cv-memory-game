import './App.scss';

import cardsData from '../../assets/data/cardsData';

import Header from '../Header/Header';
import Message from '../Message/Message';
import FoundPairs from '../FoundPairs/FoundPairs';
import BoardCards from '../BoardCards/BoardCards';

function App() {
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

  return (
    <div
      className="App"
    >
      <Header />
      <Message />
      <FoundPairs
        // 🃏 Le composant "FoundPairs" reçoit la liste des cartes
        cards={shuffledCardsWithId}
      />
      <BoardCards
        // 🃏 Le composant "Cards" reçoit la liste des cartes
        cards={shuffledCardsWithId}
      />
    </div>
  );
}

export default App;
