import { useState } from "react";
import './App.css';

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Welcome to the app!</h1>
      <button onClick={() => setLoggedIn(!LoggedIn)}>
        {LoggedIn ? "Log out" : "Log in"}
      </button>
      {LoggedIn ? (
        <h1>Hello, Anthony</h1>
      ) : (
        <div>
          <h2>Please login to continue to the app</h2>
        </div>
      )}
    </div>
  );
}

export default App;
