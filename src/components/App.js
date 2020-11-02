import React, { useState } from "react";
import AppRouter from "components/Router";
import fbase, { authService } from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  console.log(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy;Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
