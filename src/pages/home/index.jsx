import React from 'react'
import { Header } from '../../components/Header'
import background from '../../assets/background.png'
import './styles.css'
import Card from '../../components/Card';
import ItemList from '../../components/ItemList';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <img src={background} alt="background" className='background' />
        <div className='info'>
          <div>
            <input name='user' placeholder='@usuario' />
            <button>Buscar</button>'
          </div>
          <Card user="Christopher Barros" username="@chrisbarros" description="Desenvolvedor Front-end" />
          <h4>Repositórios</h4>
          <ItemList title="fisiotheapp-challenge" description="Full Stack Developer web and mobile, passionate to javascript and all your ecosystem." />
          <ItemList title="fisiotheapp-challenge" description="Full Stack Developer web and mobile, passionate to javascript and all your ecosystem." />
          <ItemList title="fisiotheapp-challenge" description="Full Stack Developer web and mobile, passionate to javascript and all your ecosystem." />
        </div>
      </div>
    </div>
  );
}

export default App;