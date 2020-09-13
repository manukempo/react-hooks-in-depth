import React from 'react';
import { render } from 'react-dom';
import ContextComponent from './Context';
import EffectComponent from './Effect';
import RefComponent from './Ref';
import StateComponent from './State';

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <StateComponent />
        <hr />
        <EffectComponent />
        <hr />
        <ContextComponent />
        <hr />
        <RefComponent />
        <hr />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
