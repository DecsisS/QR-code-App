import React from 'react';
import style from './app.module.css';
import Nav from './components/Nav/Nav.jsx';
import Content from './components/Content/Content.jsx';

const App = () => {
  return (
    <div className={style.container}>
      <Nav />
      <Content />
    </div>
  );
};

export default App;