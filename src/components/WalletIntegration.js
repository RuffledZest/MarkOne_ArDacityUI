// App.js
import React, { useState, useEffect } from 'react';
import { connectWallet, disconnectWallet, getWalletAddress, messageAR, dryrunResult } from './arweaveUtils';

const pId = "YOUR_PROCESS_ID"; // Replace with your actual Process ID

function App() {
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [todos, setTodos] = useState([]);

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

  const handleSendMessage = async () => {
    try {
      const messageId = await messageAR({
        data: { action: 'Echo', message: message },
        tags: [{ name: 'Action', value: 'Echo' }],
      });
      console.log('Message sent:', messageId);
      const result = await dryrunResult(pId, [{ name: 'Action', value: 'Echo' }]);
      setResponse(result.message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleAddTodo = async () => {
    try {
      const messageId = await messageAR({
        data: { action: 'Add-Todo', task: message },
        tags: [{ name: 'Action', value: 'Add-Todo' }],
      });
      console.log('Todo added:', messageId);
      const result = await dryrunResult(pId, [{ name: 'Action', value: 'Get-Todos' }]);
      setTodos(result.todos || []);
      setMessage('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleGetTodos = async () => {
    try {
      const result = await dryrunResult(pId, [{ name: 'Action', value: 'Get-Todos' }]);
      setTodos(result.todos || []);
    } catch (error) {
      console.error('Error getting todos:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#0d0d0d] z-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white flex flex-col items-center justify-start py-8 px-4">
      <nav className="w-full max-w-4xl px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-md mb-8 flex items-center justify-between">
        <div className="text-2xl font-bold">Ardacity DApp</div>
        {walletAddress ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm">{walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}</span>
            <button
              onClick={handleDisconnectWallet}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        )}
      </nav>

      <section className="w-full max-w-4xl px-4 py-6 rounded-lg bg-gray-800/50 backdrop-blur-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Echo Message</h2>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
        {response && <p>Response: {response}</p>}
      </section>

      <section className="w-full max-w-4xl px-4 py-6 rounded-lg bg-gray-800/50 backdrop-blur-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add a todo"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAddTodo}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
        <button
          onClick={handleGetTodos}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Get Todos
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </section>

     
    </div>
  );
}

export default App;
