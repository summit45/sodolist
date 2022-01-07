import React, { useEffect, useState } from "react";
import AppRouter from './AppRouter';
import { authService } from '../fbase.js';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect ( () => {
    authService.onAuthStateChanged((user) => {
      if (user){
        setisLoggedIn(true);
      }
      else{
        setisLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return(
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> :  "Initializing..."}
      <br></br>
      <br></br>
      <br></br>
      <footer>&copy; LeeSuMin {new Date().getFullYear()} </footer>
    </>

  ); 
}

export default App;
