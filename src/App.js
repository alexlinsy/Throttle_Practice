import React from "react";
import "./styles.css";

export default function App() {
  const throttle = (fn, delay) => {
    let lastTime = 0;
    return () => {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        lastTime = now;
        return fn();
      }
    };
  };
  const clickHandler = () => {
    console.log("I have been clicked");
  };
  return (
    <div className="App">
      <button onClick={throttle(() => clickHandler(), 5000)}>Click Me</button>
    </div>
  );
}
