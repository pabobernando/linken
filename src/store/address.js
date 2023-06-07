import { create } from 'zustand'

const useAddress = create((set) => ({
    address: '',
    setAddress: (newAddress) => set({ address: newAddress }),
    connectMetamask: async () => {
      console.log("tes konek");
  
      if (window.ethereum) {
        console.log("metamask terdeteksi");
  
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log("iki alamat e", accounts);
          set({ address: accounts[0] });
        } catch (error) {
          console.log("error konek");
        }
      } else {
        console.log("metamask tidak terdeteksi");
      }
    },
  }));

  export default useAddress