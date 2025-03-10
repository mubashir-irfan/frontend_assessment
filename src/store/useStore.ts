// src/store/useGenericStore.ts
import { create } from 'zustand';

interface StoreState<T> {
  stats: T;
  setUncompleted: (uncompleted: number) => void;
  setCompleted: (completed: number) => void;
  setDeleted: (deleted: number) => void;
}

interface Counts {
  uncompleted: number;
  completed: number;
  deleted: number;
}

const useGenericStore = create<StoreState<Counts>>((set) => ({
  stats: {
    uncompleted: 0,
    completed: 0,
    deleted: 0,
  },
  setUncompleted: (uncompleted) =>
    set((state) => ({ stats: { ...state.stats, uncompleted } })),
  setCompleted: (completed) =>
    set((state) => ({ stats: { ...state.stats, completed } })),
  setDeleted: (deleted) =>
    set((state) => ({ stats: { ...state.stats, deleted } })),
}));

export default useGenericStore;