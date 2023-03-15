import create from 'zustand';

export const useStore = create((set) => ({
    pvk: "",
    pub: "",
    updatePvk: (newPvk => set({ pvk : newPvk}))
  }));