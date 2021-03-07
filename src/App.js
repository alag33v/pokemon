import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  const { nextUrl, prevUrl } = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Here</h1>
    </div>

  );
};
