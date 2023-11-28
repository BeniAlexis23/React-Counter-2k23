import { useState } from "react";
import "./App.css"

const App = () => {

  const [count, setCount] = useState(10)

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubstract = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(10);
  }

  return (
      <div className="container">
        <h1>Counter: {count}</h1>
        <hr />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleSubstract}>-</button>
      </div>
  )

}

export default App;