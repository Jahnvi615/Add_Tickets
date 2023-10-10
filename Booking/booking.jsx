import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === 92) {
        clearInterval(intervalId);
      } else {
        setCount(count + 1);
      }
    }, 42);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className="counter">
      {count}%
    </div>
  );
}

export default Counter;