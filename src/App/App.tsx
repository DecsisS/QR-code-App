import { FC } from 'react';
import style from './_app.module.scss';
import Nav from '../components/Nav/Nav.tsx';
import Content from '../components/Content/Content.tsx';

const App: FC = () => {
  return (
    <div className={style.container}>
      <Nav />
      <Content />
    </div>
  );
};

export default App;