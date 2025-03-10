import { create } from "zustand";

const useUserStore = create((set) => ({
  users: [],
  add: (user) => set((state) => ({ users: [...state.users, user] })),

}));
export default useUserStore;