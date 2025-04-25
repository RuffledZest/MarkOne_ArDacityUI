import React, { useState } from 'react';

const LuaIDE = ({
  cellId,
  initialCode,
  onProcessId,
  onNewMessage,
  onInbox,
}) => {
  const [code, setCode] = useState(initialCode);
  const [error, setError] = useState(null);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleRun = () => {
    try {
      // Here you would typically send the code to your Lua execution service
      console.log('Running Lua code:', code);
      
      // Simulate process ID generation
      if (onProcessId) {
        onProcessId(`process-${Date.now()}`);
      }
      
      // Simulate message handling
      if (onNewMessage) {
        onNewMessage([{ type: 'info', message: 'Code executed successfully' }]);
      }
      
      // Simulate inbox updates
      if (onInbox) {
        onInbox([{ type: 'system', message: 'Process started' }]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  if (error) {
    return (
      <div className="p-4 bg-red-900 text-red-300 border border-red-700 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[300px] rounded-lg overflow-hidden">
      <div className="flex-1 p-2 bg-[#1e1e1e] border-b border-gray-700">
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="w-full h-full p-2 font-mono text-sm text-gray-200 bg-[#1e1e1e] outline-none resize-none"
          placeholder="Enter your Lua code here..."
          style={{
            caretColor: '#64B5F6',
            lineHeight: '1.5',
          }}
        />
      </div>
      <div className="p-2 bg-[#1e1e1e] border-t border-gray-700 flex justify-end">
        <button
          onClick={handleRun}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500 transition-colors"
        >
          Run Code
        </button>
      </div>
    </div>
  );
};

export default LuaIDE; 