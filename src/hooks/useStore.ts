import { create } from 'zustand';

type OpenPlansState = { test: number };

export const useStore = create<OpenPlansState>((set) => ({
  test: 0,
  setTest: (toAdd) => set((state) => ({ test: state.test + toAdd })),
}));
