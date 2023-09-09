import React from 'react';
import '../styles/global.scss';

import { createRoot } from 'react-dom/client';
import { Title } from './Typography';
import { Input } from './Input';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const App = () => {
  return (
    <>
      <Input value={"435343543"} />
      Заголовок<Title.H1>первого уровня</Title.H1>
    </>
  );
};

root.render(<App />);
