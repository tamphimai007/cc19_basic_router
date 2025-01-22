import { useState } from "react";

// rfce
function RecapUseState() {
  // Javascript
  const num = 6;
  const [number, setNumber] = useState(4);
  const [number2, setNumber2] = useState({
    num: 5,
  });
  console.log(number2.num);

  const hdlIncrease = () => {
    setNumber((prev) => prev + 1);
  };
  const hdlDecrease = () => {
    setNumber((prev) => prev - 1);
  };
  const hdlIecrease2 = () => {
    setNumber2((prev) => ({ num: prev.num + 1 }));
  };

  return (
    <div>
      <h1 className="text-8xl">{number}</h1>
      <br />
      <button
        onClick={hdlIncrease}
        className="bg-green-500 p-2 
        hover:scale-105 hover:duration-300 hover:bg-green-700
        rounded-md shadow-md"
      >
        Increase
      </button>
      <button
        onClick={hdlDecrease}
        className="bg-green-500 p-2 
        hover:scale-105 hover:duration-300 hover:bg-green-700
        rounded-md shadow-md"
      >
        Decrease
      </button>
      <hr />
      <p className="text-8xl">{number2.num}</p>
      <button
        onClick={hdlIecrease2}
        className="bg-green-500 p-2 
        hover:scale-105 hover:duration-300 hover:bg-green-700
        rounded-md shadow-md"
      >
        Increase2
      </button>
    </div>
  );
}
export default RecapUseState;
