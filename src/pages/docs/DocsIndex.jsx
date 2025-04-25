import { Link } from 'react-router-dom';
import { componentConfig } from '../../lib/componentConfig';

// Group components by category
const categorizedComponents = {};
componentConfig.forEach(component => {
  if (!categorizedComponents[component.category]) {
    categorizedComponents[component.category] = [];
  }
  categorizedComponents[component.category].push(component);
});

export default function DocsIndex() {
  return (
    <div className="pb-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-4">ArDacity UI Documentation</h1>
        <p className="text-gray-400 max-w-3xl">
          ArDacity UI is a collection of UI components designed specifically for Arweave ecosystem applications.
          These components are built with React and provide a beautiful, responsive, and accessible user experience.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Getting Started</h2>
        
        <div className="space-y-6">
          <div className="bg-[#0d0d0d] p-6 rounded-lg">
            <h3 className="text-xl font-medium text-white mb-3">Installation</h3>
            <p className="text-gray-400 mb-4">
              ArDacity UI components are available as individual NPM packages, allowing you to install only what you need.
            </p>
            <div className="bg-gray-800 p-4 rounded-md font-mono text-sm">
              <p className="text-gray-300">npm install @ar-dacity/ardacity-text-pressure</p>
            </div>
          </div>

          <div className="bg-[#0d0d0d] p-6 rounded-lg">
            <h3 className="text-xl font-medium text-white mb-3">Usage</h3>
            <p className="text-gray-400 mb-4">
              Import and use the components in your React application:
            </p>
            <div className="bg-gray-800 p-4 rounded-md font-mono text-sm">
              <p className="text-indigo-300">import</p>
              <p className="text-gray-300">{" TextPressure "}</p>
              <p className="text-indigo-300">from</p>
              <p className="text-green-300">{" '@ar-dacity/ardacity-text-pressure'"}</p>
              <p className="text-gray-300">;</p>
              <br />
              <p className="text-indigo-300">function</p>
              <p className="text-yellow-300">{" MyComponent"}</p>
              <p className="text-gray-300">{"() {"}</p>
              <p className="text-gray-300 ml-4">{"return <TextPressure text=\"ArDacity\" />;"}</p>
              <p className="text-gray-300">{"}"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Components</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categorizedComponents).map(([category, components]) => (
            <div key={category} className="bg-[#0d0d0d] p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-400 mb-4">{category}</h3>
              <ul className="space-y-3">
                {components.map(component => (
                  <li key={component.id}>
                    <Link 
                      to={`/docs/${component.id}`}
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="mr-2">→</span>
                      <span>{component.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0d0d0d] p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
        <p className="text-gray-400 mb-4">
          If you're having trouble with ArDacity UI or have questions, reach out through any of these channels:
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://github.com/YourUsername/ardacity-ui/issues" 
            target="_blank" 
            rel="noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            GitHub Issues
          </a>
          <a 
            href="https://discord.gg/ardacity" 
            target="_blank" 
            rel="noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Discord Community
          </a>
          <a 
            href="https://twitter.com/ardacity" 
            target="_blank" 
            rel="noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
} 