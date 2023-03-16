import create from 'zustand';

export const myStore = create((set) => ({
        pvk: "",
        pub: "",
        updatePvk: (newPvk => set({ pvk : newPvk})),
        updatePub: (newPub => set({ pub : newPub}))
    }));