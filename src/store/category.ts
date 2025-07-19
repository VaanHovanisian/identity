import { create } from "zustand";

interface StateCategory {
  activeCategory: string;
  setActiveCategory: (value: string) => void;
}

export const useCategoryStore = create<StateCategory>((set) => ({
  activeCategory: "ՄԵՐ ՄԱՍԻՆ",
  setActiveCategory: (value) => {
    set({ activeCategory: value });
  },
}));
