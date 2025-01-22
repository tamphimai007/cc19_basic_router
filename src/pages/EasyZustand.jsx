import useTamStore from "../store/tamStore";

// rfce
function EasyZustand() {
  // javascript

  // Step 2 Use Store
  const firstName = useTamStore((state) => state.firstName);
  const address = useTamStore((state) => state.address);
  const profile = useTamStore((state) => state.profile);
  const products = useTamStore((state) => state.products);
  const number = useTamStore((state) => state.number);
  const actionIncrease = useTamStore((state) => state.actionIncrease);
  const actionDecrease = useTamStore((state) => state.actionDecrease);
  const actionMulti = useTamStore((state) => state.actionMulti);
  const actionDivide = useTamStore((state) => state.actionDivide);
  console.log(number);

  const hdlClick = () => {
    // javascript .......
    actionDecrease();
  };

  return (
    <div>
      <p className="text-8xl">{number}</p>
      <button onClick={actionIncrease} className="bg-green-400">
        Increase
      </button>
      <br />
      <button onClick={hdlClick} className="bg-green-400">
        Decrease
      </button>
      <br />
      <button onClick={actionMulti} className="bg-green-400">
        Multi
      </button>
      <br />
      <button onClick={() => actionDivide("tam")} className="bg-green-400">
        Divide
      </button>
    </div>
  );
}
export default EasyZustand;
