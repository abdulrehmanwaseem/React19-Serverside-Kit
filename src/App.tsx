import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Click Me
    </button>
  );
}

export default App;
