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

        // Switch to Goerli network
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x2329', // Goerli Chain ID
              chainName: 'Evmos',
              rpcUrls: ['https://jsonrpc-evmos-ia.cosmosia.notional.ventures'],
              nativeCurrency: {
                name: 'Evmos',
                symbol: 'EVMOS',
                decimals: 18,
              },
              blockExplorerUrls: ['https://escan.live/'],
            },
          ],
        });

        console.log("Switched to Goerli network");

      } catch (error) {
        console.log("Error connecting to Metamask:", error);
      }
    } else {
      console.log("Metamask not detected.");
    }
  },
}));

export default useAddress;
