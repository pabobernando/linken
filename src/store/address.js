import { create } from 'zustand';
import Buffer from 'bops'

const useAddress = create((set) => ({
  address: '',
  user: '',
  setAddress: (newAddress) => set({ address: newAddress }),
  setUser: (newUser) => set({ user: newUser }),
  connectMetamask: async () => {
    const ethereum = window.ethereum
    console.log("Connecting to Metamask...");

    if (ethereum) {
      console.log("Metamask detected.");

      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("konek iki:", accounts[0]);

        set({ address: accounts[0] });

        // jupuk 4 character mburi
        const lastFourCharacters = accounts[0].slice(-4);
        console.log("Last four characters of the address:", lastFourCharacters);

        set({ user: lastFourCharacters });

        // POST address
        const exampleMessage = 'iki isine opo rangerti gan wkwkk';
        const msg = `0x${Buffer.from(exampleMessage, 'utf8').toString('hex')}`;
        const from = accounts[0];
        const sign = await ethereum.request({
          method: 'personal_sign',
          params: [msg, from],
        });

        console.log(sign, "iki sek dikirim")

        useAddress.getState().postData();
      } catch (error) {
        console.log("Error konek Metamask:", error);
      }
    } else {
      console.log("Metamask ra detek.");
    }
  },
  postData: async () => {
    try {
      const { address, user } = useAddress.getState();
        
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
