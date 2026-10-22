import React, { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(0);
  const decrement = () => { if (count > 0) setCount(count - 1); }
  const increment = () => { setCount(count + 1); }
  const reset = () => { setCount(0); }
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>Counter App</h1>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>RESET</button>
      <button onClick={increment}>+</button>
    </div>
  )
}
export default App