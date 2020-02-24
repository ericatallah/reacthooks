import React, { useReducer } from 'react';

const initialState = [
  { id: 1, content: 'Wash the car.', isComplete: false },
  { id: 2, content: 'Get groceries.', isComplete: true },
  { id: 3, content: 'Mow the lawn.', isComplete: false }
];

const todoReducer = (state, action) => {
  let nextId = 4;
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, { id: nextId++, content: action.content, isComplete: action.isComplete }];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(({ id, content, isComplete }) => ({
        id,
        content,
        isComplete: id === action.id ? !isComplete : isComplete
      }));
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log('state is: ', state);

  return (
    <ul>
      {
        state.map(todo => (
          <li key={todo.id}>
            <button onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}>Complete</button>
            <div>{todo.content}</div>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>x</button>
          </li>
        ))
      }
    </ul>
  )

}

export default Home;
