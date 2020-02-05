import React from 'react';
import './App.css';
import Header from './header';
import Content from './content';
import {BrowserRouter as Router} from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
        <Header />
      <article>
        <Content />
      </article>
    </Router>
  );
}

export default App;
