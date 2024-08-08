import React from 'react'
import { Header } from '../../components/Header'
import background from '../../assets/background.png'
import './styles.css'
import Card from '../../components/Card';


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
        </div>
      </div>
    </div>
  );
}

export default App;