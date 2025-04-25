import { useState } from "react";
import "./App.css";
import Bookshelf from "./components/Bookshelf/Bookshelf.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
}

export default App;
