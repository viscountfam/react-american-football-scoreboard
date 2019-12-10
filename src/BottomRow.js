import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter, setquarter] = useState(1);
  const [down, setdown] = useState(1);
  const [ballOn, setball] = useState(20);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
      <div className="Buttons">
        <button onClick={() => setquarter(quarter + 1)}>Next quarter</button>
        <button onClick={() => setquarter(1)}>Reset Game</button>
        <button onClick={() => setdown(down + 1)}>Next down</button>
        <button onClick={() => setdown(1)}>First Down/Turnover</button>
      </div>
    </div>
  );
};

export default BottomRow;
