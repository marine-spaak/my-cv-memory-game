import './App.scss';

import cardsData from '../../assets/data/cardsData';

import Header from '../Header/Header';
import Cards from '../Cards/Cards';

function App() {
  const doubleCards = [...cardsData, ...cardsData];
  const shuffledCards = doubleCards.sort(() => Math.random() - 0.5);

  return (
    <div className="App">
      <Header />
      <Cards
        cards={shuffledCards}
      />
    </div>
  );
}

export default App;
