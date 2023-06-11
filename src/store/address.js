import { create } from 'zustand';

const useAddress = create((set) => ({
  address: '',
  setAddress: (newAddress) => set({ address: newAddress }),
  connectMetamask: async () => {
    console.log("Connecting to Metamask...");

    if (window.ethereum) {
      console.log("Metamask detected.");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected account:", accounts[0]);

        // Extract last 4 characters of the address
        const lastFourCharacters = accounts[0].slice(-4);
        console.log("Last four characters of the address:", lastFourCharacters);

        set({ address: lastFourCharacters });
      } catch (error) {
        console.log("Error connecting to Metamask:", error);
      }
    } else {
      console.log("Metamask not detected.");
    }
  },
  postData: async () => {
    try {
      const response = await fetch('http://localhost:3001', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: set.address }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Success:', responseData);
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  },
}));

export default useAddress;
