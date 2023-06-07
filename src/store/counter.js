import create from 'zustand'

const useStore = create(set => ({
    counter:0 ,
    tambah: () => set((state) => ({counter: state.tambah + 1})),
    kurang: () => set((state) => ({counter: state.kurang - 1}))
}))

export default useStore