import { create } from "zustand";

export const useStore = create((set) => ({
  data: [
    { id: 1, xolat: "boshlanmagan", title: "kun tartibi" },
    { id: 2, xolat: "boshlanmagan", title: "kun tartibi" },
    { id: 3, xolat: "boshlanmagan", title: "kun tartibi" },
    { id: 4, xolat: "jarayonda", title: "toqqa borish" },
    { id: 5, xolat: "jarayonda", title: "toqqa borish" },
    { id: 6, xolat: "jarayonda", title: "toqqa borish" },
    { id: 7, xolat: "tugallangan", title: "chodak" },
    { id: 8, xolat: "tugallangan", title: "chodak" },
    { id: 9, xolat: "tugallangan", title: "chodak" },
  ],
  updateData: (id, newXolat) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id ? { ...item, xolat: newXolat } : item
      ),
    })),
}));
