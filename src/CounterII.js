import React, { useState } from "react";

const CounterII = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handlePrevious(type) {
    if (type === "step") setStep((s) => s - 1);
    else if (type === "count") setCount((c) => c - step);
    // if (type == > -11) setStep((s) => s - 1);
  }

  function handleNext(type) {
    console.log(step, count);
    if (type === "step") setStep((s) => s + 1);
    else if (type === "count") setCount((c) => c + step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  const date = new Date("June 27 2027");
  date.setDate(date.getDate() + count);
  //   console.log(date)

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => handlePrevious("count")}>-</button>
        {/* <span>Count: {count}</span> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => handleNext("count")}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(count !== 0 || step !== 1) ? <div>
        <button onClick={handleReset}>Reset</button>
      </div> : null}
    </div>
  );
};

export default CounterII;
