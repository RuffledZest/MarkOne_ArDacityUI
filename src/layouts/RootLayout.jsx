/* eslint-disable no-unused-vars */
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Aurora from '../components/ArDacityUi/Aurora/Aurora';
import { connectWallet, disconnectWallet, getWalletAddress } from '../components/arweaveUtils';


export default function RootLayout() {
  const location = useLocation();
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const checkWallet = async () => {
      setIsLoading(true);
      if (window.arweaveWallet) {
        try {
          const address = await getWalletAddress(); //this is where the component goes to the permaweb -- bazaar int:pt1 use permawebint()
          setWalletAddress(address);
        }
        catch (error) {
          console.error("Error fetching wallet address:", error); 

        }
      }
      setIsLoading(false);
    };
    checkWallet();
  }, []);

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    try {
      await connectWallet();
      const address = await getWalletAddress();
      setWalletAddress(address);
    } catch (error) {
      console.error("Wallet connection error:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnectWallet = async () => {
    await disconnectWallet();
    setWalletAddress('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Aurora background for aesthetic appeal */}
      <div 
        style={{ width: '100%', height: '300px' }}
        className="overflow-hidden mx-auto absolute z-0 top-0 left-0 right-0"
      >
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between w-full text-white p-4 sticky top-0 z-50 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/ArDacity-design3.png" alt="ArDacity UI Logo" className="h-14 w-full" />
          </Link>
        </div>
        
        <div className="flex space-x-4">
          <Link to="/" className={`hover:text-gray-400 ${location.pathname === '/' ? 'text-indigo-400' : ''}`}>
            Home
          </Link>
          <Link to="/docs" className={`hover:text-gray-400 ${location.pathname.includes('/docs') ? 'text-indigo-400' : ''}`}>
            Documentation
          </Link>
          <a href="https://github.com/RuffledZest/MarkOne_ArDacityUI" target="_blank" rel="noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
        </div>
        
        <div className="flex space-x-4">
        {walletAddress ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm">{walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</span>
            <button
              onClick={handleDisconnectWallet}
              className="bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black text-white font-bold py-2 px-4 rounded"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="bg-white text-black  py-2 px-4 rounded 
            hover:bg-black hover:text-white hover:border-2 hover:border-white"
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        )}
        </div>
      </nav>

      {/* Main content */}
      <main className={`flex-grow ${isHome ? '' : 'pt-8'} z-10 relative`}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 mt-16 z-10 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/ArDacity-design3.png" alt="ArDacity UI Logo" className="h-10" />
              <p className="text-gray-400 mt-2">A collection of UI components for Arweave Ecosystem</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/RuffledZest/MarkOne_ArDacityUI" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                GitHub
              </a>
              <a href="https://twitter.com/ardacity" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="https://discord.gg/ardacity" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                Discord
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} ArDacity UI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 