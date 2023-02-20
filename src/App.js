import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import SushiBlock from './components/SushiBlock'; 

import sushi from './assets/sushi.json'
import './scss/app.scss';

function App() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
            <div className='content__top'>
              <Categories />
              <Sort />
            </div>
            <h2 className='content__title'>Всі суші</h2>
            <div className='content__items'>
              {sushi.map(obj => (
                <SushiBlock key={obj.id} {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  