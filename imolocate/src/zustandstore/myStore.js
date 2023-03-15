import create from 'zustand';

export const myStore = create((set, get) => {
    console.log("here");
    console.trace();
    return ({
        pvk: "",
        pub: "",
        updatePvk: (newPvk => set({ pvk : newPvk})),
        updatePub: (newPub => set({ pub : newPub}))
    })
});