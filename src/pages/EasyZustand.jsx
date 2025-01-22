import { create } from "zustand";

// rfce
function EasyZustand() {
  // javascript
 // Step 1 Create Store
 const tamStore = ()=>({
    firstName : 'phongphat'
 })

 const useTamStore = create()


 // Step 2 Use Store

  return <div>EasyZustand</div>;
}
export default EasyZustand;
