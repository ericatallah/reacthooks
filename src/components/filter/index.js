import React, { useReducer } from 'react';

const filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETE: 'SHOW_COMPLETE',
  SHOW_INCOMPLETE: 'SHOW_INCOMPLETE'
};

const initialState = {
  filter: 'SHOW_ALL',
};

const filterReducer = (state, action) => {
  return { filter: action.type }
}

const Filter = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  console.log('state is: ', state);

  return (
    <ul className="filters">
      <li>
        <button onClick={() => dispatch({ type: 'SHOW_ALL' })}>Show All</button>
      </li>
      <li>
        <button onClick={() => dispatch({ type: 'SHOW_COMPLETE' })}>Show Complete</button>
      </li>
      <li>
        <button onClick={() => dispatch({ type: 'SHOW_INCOMPLETE' })}>Show Incomplete</button>
      </li>
    </ul>
  )

}

export default Filter;

