import { create } from 'zustand';

const useAddress = create((set) => ({
  address: '',
  user: '',
  signedData: '',
  setAddress: (newAddress) => set({ address: newAddress }),
  setUser: (newUser) => set({ user: newUser }),
  setSignedData: (newSignedData) => set({ signedData: newSignedData }),
  connectMetamask: async () => {
    const ethereum = window.ethereum;
    console.log("Connecting to Metamask...");

    if (ethereum) {
      console.log("Metamask detected.");

      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Connected address:", accounts[0]);

        set({ address: accounts[0] });

        // Get the last four characters of the address
        const lastFourCharacters = accounts[0].slice(-4);
        console.log("Last four characters:", lastFourCharacters);

        set({ user: lastFourCharacters });

<<<<<<< HEAD
        // POST address
        const exampleMessage = 'Kewr Foundation';
        const from = accounts[0];
        const sign = await ethereum.request({
          method: 'personal_sign',
          params: [exampleMessage, from],
        });

        console.log(sign, "Signature sent");
=======
        // Prepare the message to be signed
        const message = 'Approve to Login in this site using Metamask Wallet?';

        // Sign the message
        const sign = await ethereum.request({
          method: 'personal_sign',
          params: [message, accounts[0]],
        });

        console.log(sign, "Signature sent");

        // Update the signedData state
        set({ signedData: sign });
>>>>>>> 992ae2d1c760a97b82934a4bec50e0da58dd1815

        // Call the postData function
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
<<<<<<< HEAD
      const { address, user } = useAddress.getState();
=======
      const { address, user, signedData } = useAddress.getState();
>>>>>>> 992ae2d1c760a97b82934a4bec50e0da58dd1815

      if (user === '') {
        console.log('User does not exist. Skipping POST request.');
        return;
      }

      const response = await fetch('http://localhost:3009/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address, user, signedData }), // Include signedData in the request body
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
