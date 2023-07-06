import create from 'zustand';

// Create Zustand store
const useTimestampStore = create((set) => ({
  timestamp: null,
  setTimestamp: (timestamp) => set({ timestamp }),
}));

export default useTimestampStore;
