import './App.scss';

import cardsData from '../../assets/data/cardsData';

import Header from '../Header/Header';
import Message from '../Message/Message';
import Cards from '../Cards/Cards';

function App() {
  const doubleCards = [...cardsData, ...cardsData];
  const shuffledCards = doubleCards.sort(() => Math.random() - 0.5);

  // Modifier shuffledCards pour que chaque card reçoive en id sa position dans le tableau
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
      <Cards
        cards={shuffledCardsWithId}
      />
    </div>
  );
}

export default App;
