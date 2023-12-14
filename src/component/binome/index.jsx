import React, { useReducer } from 'react';
import numbersReducer,{ initialState }   from '../reducer/index';

function Binome() {
    const [state, dispatch] = useReducer(numbersReducer, initialState);

    return (
      <div>
         <p>Number a number alea between 1 at 30</p>
        <button onClick={() => dispatch({ type: 'ADD_NUMBER' })}>Add</button>
        <p>Liste : {state.numbers.join(', ')}</p>
        <button onClick={() => dispatch({ type: 'GENERATE_PAIRS' })}>Generate pair</button>
        {state.pairs.map((pair, index) => (
          <p key={index}>{pair.join(',')}</p>
        ))}
      </div>
    );
  }

export default Binome;