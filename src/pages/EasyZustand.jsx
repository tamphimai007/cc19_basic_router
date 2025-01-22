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
      <br/>
      <button onClick={hdlClick} className="bg-green-400">
        Decrease
      </button>
    </div>
  );
}
export default EasyZustand;
