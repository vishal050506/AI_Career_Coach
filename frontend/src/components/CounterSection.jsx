import React, { useState, useEffect } from "react";

const CounterSection = () => {
  const [counters, setCounters] = useState([
    { value: 0, target: 300, suffix: "K+", text: "companies hiring" },
    { value: 0, target: 10, suffix: "K+", text: "new openings everyday" },
    { value: 0, target: 21, suffix: "Mn+", text: "active students" },
    { value: 0, target: 600, suffix: "K+", text: "learners" },
  ]);

  useEffect(() => {
    const duration = 10000; // 2 second animation
    const startTime = performance.now();

    const animateCounters = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters((prevCounters) =>
        prevCounters.map((counter) => ({
          ...counter,
          value: Math.floor(progress * counter.target),
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, []);

  return (
    <div className="flex flex-wrap justify-around gap-8 pt-10 px-4">
      {counters.map((counter, index) => (
        <div key={index} className="text-center min-w-[150px]">
          <div className="text-5xl font-bold text-blue-600 flex items-end justify-center mb-5">
            {counter.value.toLocaleString()}
            <span className="text-3xl font-medium ml-1 text-gray-600">
              {counter.suffix}
            </span>
          </div>
          <p className="text-xl text-gray-800 m-0">{counter.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CounterSection;
