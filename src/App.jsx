// import React, { useEffect, useState } from 'react'

// import { connectWallet, disconnectWallet, getWalletAddress } from './components/arweaveUtils';
// import Aurora from './components/ArDacityUi/Aurora/Aurora'
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import DocsLayout from './layouts/DocsLayout';
import Home from './pages/Home';
import DocsIndex from './pages/docs/DocsIndex';
import ComponentPage from './pages/docs/ComponentPage';

function App() {

    // const [walletAddress, setWalletAddress] = useState('');
    // const [isLoading, setIsLoading] = useState(true);
    // const [isConnecting, setIsConnecting] = useState(false);
   
    // // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     const checkWallet = async () => {
    //       setIsLoading(true);
    //       if (window.arweaveWallet) {
    //         try {
    //           const address = await getWalletAddress(); //this is where the component goes to the permaweb -- bazaar int:pt1 use permawebint()
    //           setWalletAddress(address);
    //         }
    //         catch (error) {
    //           console.error("Error fetching wallet address:", error); 
    
    //         }
    //       }
    //       setIsLoading(false);
    //     };
    //     checkWallet();
    //   }, []);
    
    //   const handleConnectWallet = async () => {
    //     setIsConnecting(true);
    //     try {
    //       await connectWallet();
    //       const address = await getWalletAddress();
    //       setWalletAddress(address);
    //     } catch (error) {
    //       console.error("Wallet connection error:", error);
    //     } finally {
    //       setIsConnecting(false);
    //     }
    //   };
    
    //   const handleDisconnectWallet = async () => {
    //     await disconnectWallet();
    //     setWalletAddress('');
    //   };
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="docs" element={<DocsLayout />}>
          <Route index element={<DocsIndex />} />
          <Route path=":componentId" element={<ComponentPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App