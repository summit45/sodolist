import React, { useEffect, useState } from "react";
import AppRouter from './AppRouter';
import { authService } from '../fbase.js';

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null); // null로 해도 되는지

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
      <br></br>
      <br></br>
      <br></br>
      <footer>&copy; LeeSuMin {new Date().getFullYear()} </footer>
    </>
  );
}

export default App;
