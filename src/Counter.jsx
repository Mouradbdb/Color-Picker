import React, { useState } from "react";

function Counter() {
  const [COUNTER, SetCOUNTER] = useState(0);
  const increase = () => {
    SetCOUNTER(COUNTER + 1);
  };
  const reset = () => {
    SetCOUNTER(0);
  };
  const decrease = () => {
    SetCOUNTER(COUNTER - 1);
  };
  return (
    <div className="shadow-md h-50 ">
      <h1 className="text-center text-8xl text-white">{COUNTER}</h1>
      <div>
        <button
          onClick={decrease}
          className="border border-teal-950 px-5 py-3 rounded-full m-5 bg-teal-400 font-black text-rose-600 uppercase"
        >
          Decrease
        </button>
        <button
          onClick={reset}
          className="border border-teal-950 px-5 py-3 rounded-full m-5 bg-teal-400 font-black text-rose-600 uppercase"
        >
          Reset
        </button>
        <button
          onClick={increase}
          className="border border-teal-950 px-5 py-3 rounded-full m-5 bg-teal-400 font-black text-rose-600 uppercase"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
