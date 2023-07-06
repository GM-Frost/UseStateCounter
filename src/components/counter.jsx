import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const countIncrement = () => {
    setCount(count + 1);
  };
  const countDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <button onClick={countDecrement} className="counterButton">
        -
      </button>
      <input type="text" disabled value={count} className="counter" />
      <button onClick={countIncrement} className="counterButton">
        +
      </button>
    </>
  );
}
export default Counter;
