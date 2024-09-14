import { useState } from "react";
import AddTodos from "./components/AddTodos";
import "./App.css";
import MapTodos from "./components/MapTodos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello Guyss</h1>
      <AddTodos />
      <MapTodos/>
    </>
  );
}

export default App;
