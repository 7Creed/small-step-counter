import React, { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handlePrevious(type) {
    if (type === "step") setStep((s) => s - 1);
    else if (type === "count") setCount((c) => c - step);
    // if (type == > -11) setStep((s) => s - 1);
  }

  function handleNext(type) {
    if (type === "step") setStep((s) => s + 1);
    else if (type === "count") setCount((c) => c + step);
  }

  const date = new Date("June 27 2027");
  date.setDate(date.getDate() + count);
  //   console.log(date)

  return (
    <div className="counter">
      <div>
        <button onClick={() => handlePrevious("step")}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => handleNext("step")}>+</button>
      </div>
      <div>
        <button onClick={() => handlePrevious("count")}>-</button>
        <span>Count: {count}</span>
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
    </div>
  );
};

export default Counter;
