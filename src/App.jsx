import React, { useContext, useEffect } from 'react';
import Routing from './Router';
import { DataContext } from './Components/DataProvider/DataProvider';
import { Type } from './Utility/actionType';
import { auth } from './Utility/firebase';

function App() {
  const { state, dispatch } = useContext(DataContext);
  const { user } = state;
    useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Routing/>
    </>
  );
}

export default App;
