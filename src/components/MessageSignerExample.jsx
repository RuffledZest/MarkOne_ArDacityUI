import React from 'react';
import { MessageSignerForm } from './ArDacityUi/MessageSigner';

const MessageSignerExample = () => {
  const handleSign = (result) => {
    console.log('Message:', result.message);
    console.log('Signature:', result.signature);
    console.log('Lua Code:', result.luaCode);
    // You can handle the signed message here (e.g., send to server, etc.)
  };

  // Optional custom Lua code
  const customLuaCode = `
function signMessage(message)
  -- Custom signature implementation
  local signature = "ardacity_" .. message:gsub("%s+", "_")
  return {
    signature = signature,
    timestamp = os.time()
  }
end
  `;

  return (
    <div className="container mx-auto p-4">
      <MessageSignerForm 
        title="ArDacity Message Signer"
        description="Sign your messages with custom Lua handlers"
        initialLuaCode={customLuaCode}
        onSign={handleSign}
        className="my-8"
        style={{ maxWidth: '800px' }}
      />
    </div>
  );
};

export default MessageSignerExample; 