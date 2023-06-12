import { create } from 'zustand';

const useAddress = create((set) => ({
  address: '',
  user: '',
  setAddress: (newAddress) => set({ address: newAddress }),
  setUser: (newUser) => set({ user: newUser }),
  connectMetamask: async () => {
    console.log("Connecting to Metamask...");

    if (window.ethereum) {
      console.log("Metamask detected.");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected account:", accounts[0]);

        set({ address: accounts[0] });

        // Extract last 4 characters of the address
        const lastFourCharacters = accounts[0].slice(-4);
        console.log("Last four characters of the address:", lastFourCharacters);

        // Set user as the last four characters of the address
        set({ user: lastFourCharacters });

        // POST address and user to localhost
        useAddress.getState().postData();
      } catch (error) {
        console.log("Error connecting to Metamask:", error);
      }
    } else {
      console.log("Metamask not detected.");
    }
  },
  postData: async () => {
    try {
      const { address, user } = useAddress.getState();
  
      // Check if user already exists
      if (user === '') {
        console.log('User does not exist. Skipping POST request.');
        return;
      }
  
      const response = await fetch('http://localhost:3009/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address, user }),
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
  
  signTypedData: async (data) => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const address = accounts[0];

        const signature = await window.ethereum.request({
          method: 'eth_signTypedData_v4',
          params: [address, JSON.stringify(data)],
        });

        console.log('Signature:', signature);
      } else {
        console.log('Metamask not detected.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  },
}));

export default useAddress;
