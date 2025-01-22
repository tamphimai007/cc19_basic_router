import { create } from "zustand";
// Step 1 Create Store
const tamStore = () => ({
  firstName: "phongphat",
  lastName: "japhichom",
  address: { street: "1234", zipcode: "567" },
});
const useTamStore = create(tamStore);
export default useTamStore;
