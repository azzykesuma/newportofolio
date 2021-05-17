import React from 'react';
import './App.css';
import Main from './component/Main'
import { Background,BcgContainer } from './Background'
import bcg from './assets/bcg.svg'

function App() {
  return (
    <div className="App">
      <BcgContainer>
        <Background src={bcg} />
        <Main />
      </BcgContainer>
    </div>
  );
}

export default App;
