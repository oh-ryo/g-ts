import React from 'react';
import './App.css';
import Common from './common';
import Header from './header';
import Content from './content';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <article>
        <Common name="john du"/>
        <Content />
      </article>
    </div>
  );
}

export default App;
