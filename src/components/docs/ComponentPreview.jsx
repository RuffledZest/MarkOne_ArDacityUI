import { useState } from 'react';
import CodeBlock from './CodeBlock';

export default function ComponentPreview({ component, code, children }) {
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden mb-8">
      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'preview'
              ? 'bg-gray-800 text-white'
              : 'bg-[#0d0d0d] text-gray-400 hover:text-white hover:bg-gray-800'
          }`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'code'
              ? 'bg-gray-800 text-white'
              : 'bg-[#0d0d0d] text-gray-400 hover:text-white hover:bg-gray-800'
          }`}
          onClick={() => setActiveTab('code')}
        >
          Code
        </button>
      </div>

      {/* Content */}
      <div className="p-4 bg-[#0d0d0d]">
        {activeTab === 'preview' ? (
          <div className="bg-black rounded-lg p-6 flex items-center justify-center min-h-[200px]">
            {children}
          </div>
        ) : (
          <CodeBlock code={code} language="jsx" />
        )}
      </div>
    </div>
  );
} 