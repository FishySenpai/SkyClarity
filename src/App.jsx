import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>test</div>
      <Routes>
        <div>hello</div>
        <Route path="/test" element={Home}>
          test
        </Route>
      </Routes>
    </div>
  );
}

export default App;
