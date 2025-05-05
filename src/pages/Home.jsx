import { Link } from 'react-router-dom';
import TextPressure from '../components/ArDacityUi/TextPressure/TextPressure';
import ScrollReveal from '../components/ArDacityUi/ScrollReveal/ScrollReveal';
import PixelTransition from '../components/ArDacityUi/PixelTransition/PixelTransition';
import { componentConfig } from '../lib/componentConfig';

// Group components by category for display
const categorizedComponents = {};
componentConfig.forEach(component => {
  if (!categorizedComponents[component.category]) {
    categorizedComponents[component.category] = [];
  }
  categorizedComponents[component.category].push(component);
});

export default function Home() {
  const categories = Object.keys(categorizedComponents);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <div className="h-[80vh] w-full flex flex-col items-center justify-center">
        <div className="relative items-center justify-center w-full bg-black text-white overflow-x-hidden text-9xl my-2 max-w-6xl mx-auto z-40">
          <TextPressure />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-light text-[#ffffff]/60">A collection of UI components for Arweave Ecosystem</h2>
          <h2 className="text-xl font-light text-[#ffffff]/60 mb-8">Making Frontend and Handlers easy for you</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/docs"
              className="
              bg-white text-black hover:bg-black hover:translate-y-[-10px] hover:text-white
               transition-all duration-200  border border-white
               font-medium py-3 px-6 rounded-lg "
            >
              Get Started
            </Link>
            <a
              href="https://github.com/RuffledZest/MarkOne_ArDacityUI"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1b1b1b] hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg hover:translate-y-[-10px] 
               transition-all duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto my-20 px-4">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          className="text-center text-2xl font-bold text-white max-w-4xl mx-auto p-4"
        >
          ArDacity UI is a collection of UI components for Arweave Ecosystem.
          It is designed to make frontend and arweave handlers easy for you.
          The components are built with React and Tailwind CSS, and they are fully customizable.
          You can use them in your own projects or contribute to the library.
        </ScrollReveal>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Components Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <PixelTransition
              key={category}
              firstContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem",
                    backgroundColor: "#111",
                    borderRadius: "0.5rem",
                  }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{category}</h3>
                  <ul className="list-disc pl-5 text-gray-300">
                    {categorizedComponents[category].map(component => (
                      <li key={component.id} className="mb-2">
                        {component.name}
                      </li>
                    ))}
                  </ul>
                </div>
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem",
                    backgroundColor: "#1a1a2e",
                    borderRadius: "0.5rem",
                  }}
                >
                  <h3 className="text-2xl font-bold text-indigo-400 mb-4">{category}</h3>
                  <p className="text-gray-300 mb-6 text-center">
                    Explore {categorizedComponents[category].length} components in this category.
                  </p>
                  <Link
                    to="/docs"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition-colors"
                  >
                    View Documentation
                  </Link>
                </div>
              }
              gridSize={12}
              pixelColor="#614df2"
              animationStepDuration={0.4}
              className="h-[300px]"
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#0d0d0d] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to build on Arweave?</h2>
            <p className="text-gray-400 max-w-2xl mb-8">
              Get started with ArDacity UI today and create beautiful, responsive, and accessible user interfaces for your Arweave applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/docs"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                View Components
              </Link>
              <a
                href="https://www.npmjs.com/org/ar-dacity"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                NPM Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 