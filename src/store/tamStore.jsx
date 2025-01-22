import { create } from "zustand";
// Step 1 Create Store
const tamStore = (set) => ({
  firstName: "phongphat",
  lastName: "japhichom",
  address: { street: "1234", zipcode: "567" },
  profile: ["phongphat", "japhichom"],
  products: [
    { id: 1, title: "ASUS", price: 50000 },
    { id: 2, title: "MSI", price: 40000 },
  ],
  number: 5,
  actionIncrease: () => {
    // * setNumber2((state) => ({ num: state.num + 1 }));
    set((state) => ({ number: state.number + 1 }));
  },
  actionDecrease: () => {
    set((state) => ({ number: state.number - 1 }));
  },
});
const useTamStore = create(tamStore);
export default useTamStore;
