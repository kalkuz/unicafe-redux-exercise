import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

function App() {
  const good = () => {
    store.dispatch({
      type: 'GOOD',
    });
  };
  const ok = () => {
    store.dispatch({
      type: 'OK',
    });
  };
  const bad = () => {
    store.dispatch({
      type: 'BAD',
    });
  };
  const zero = () => {
    store.dispatch({
      type: 'ZERO',
    });
  };

  return (
    <div>
      <button type="button" onClick={good}>good</button>
      <button type="button" onClick={ok}>ok</button>
      <button type="button" onClick={bad}>bad</button>
      <button type="button" onClick={zero}>reset stats</button>
      <div>
        good
        {' '}
        {store.getState().good}
      </div>
      <div>
        ok
        {' '}
        {store.getState().ok}
      </div>
      <div>
        bad
        {' '}
        {store.getState().bad}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
