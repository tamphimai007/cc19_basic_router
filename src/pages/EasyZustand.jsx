import useTamStore from "../store/tamStore";

// rfce
function EasyZustand() {
  // javascript


 // Step 2 Use Store
 const firstName = useTamStore((state)=>state.firstName)
 const address = useTamStore((state)=>state.address)
 console.log(address.street)

  return <div>EasyZustand</div>;
}
export default EasyZustand;
