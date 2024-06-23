// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import logosm2 from './Assets/Images/Logosm2.png';
import god1 from './Assets/Images/God1.png'
import god2 from './Assets/Images/God2.png'
import god3 from './Assets/Images/God3.png'
import god4 from './Assets/Images/God4.png'


function Home() {
  return <div className='Publico-content'>
    <div className='home-content'>
      <img className='home-logo' src={logosm2} alt='imagem deus'/>
      <p className='text-content'>
      "SUA BUILD ENCONTRA AQUI"
     </p>
    </div>
     <img className='foto-content4' src={god4} alt='imagem deus'/>
  </div>;
}

function Page1() {
  return <div className='Publico-content'>
    <p className='text-content'>
      "Destinado aos amantes do jogo Smite 2,
     mais especificamente aqueles que buscam
     melhorar o seu desempenho no jogo através
     de um conhecimento disponível, mas de difícil
     e moroso acesso."
     </p>
     <CSSTransition in={Page1} appear={true} timeout={500} classNames="fade">
     <img className='foto-content1' src={god1} alt='imagem deus'/>
     </CSSTransition>
  </div>;
}

function Page2() {
  return (
    <div className='Publico-content'>
      <div className='scrollable-text-content'>
        <p className='text-content'>
          "O Smite 2 Builds é um aplicativo Android e IOS capaz de:
          Cadastrar God's, seus atributos, habilidades e itens disponíveis.
          Calcular os atributos gerais e por habilidade após a inclusão de cada item, informando assim o dano aproximado por ataque básico e habilidade.
          Calcular confrontos, ou seja, seu God com sua build contra um God inimigo e sua build ou bots do jogo.
          Salvar builds e compartilhar com a comunidade.
          Comparar atributos e confrontos entre até 10 builds.
          Isso tudo ficará disponível na palma de sua mão, desta forma, você poderá fazer seus estudos mesmo sem estar com seu PC/console por perto ou até mesmo entre uma morte e outra do jogo."
        </p>
      </div>
      <img className='foto-content2' src={god2} alt='imagem deus'/>
    </div>
  );
}

function Page3() {
  return <div className='Publico-content'>
    <p className='text-content'>
    "Tem perguntas, sugestões ou feedback sobre o Sm2Builds?
     Estamos aqui para ajudar! Entre em contato conosco através
     do formulário abaixo, ou nos siga nas redes sociais para ficar
     por dentro das últimas atualizações e dicas. Sua opinião é 
     para continuarmos melhorando e oferecendo a melhor experiência possível."
     </p>
     <img className='foto-content3' src={god3} alt='imagem deus'/>
  </div>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logosm2} alt='Logo sm2' />
          <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : undefined}>Home</NavLink>
            <NavLink to="/page1" className={({ isActive }) => isActive ? "active-link" : undefined}>Público Alvo</NavLink>
            <NavLink to="/page2" className={({ isActive }) => isActive ? "active-link" : undefined}>Sobre</NavLink>
            <NavLink to="/page3" className={({ isActive }) => isActive ? "active-link" : undefined}>Contato</NavLink>
          </nav>
        </header>
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </main>
        <footer className='App-footer'>
          <p><strong>Ficou Alguma dúvida?</strong></p>
          <p>Entre em contato com a gente!</p>
          <p>(48)*****-****</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
