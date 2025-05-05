"use client"

import { useState, useEffect } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import { componentConfig } from "../lib/componentConfig"

export default function DocsLayout() {
  const location = useLocation()
  const [activeComponent, setActiveComponent] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("Library")

  useEffect(() => {
    const currentPath = location.pathname
    const componentPath = currentPath.split("/").pop()
    setActiveComponent(componentPath)
  }, [location.pathname])

  // Group components by category
  const categorizedComponents = {}
  componentConfig.forEach((component) => {
    if (!categorizedComponents[component.category]) {
      categorizedComponents[component.category] = []
    }
    categorizedComponents[component.category].push(component)
  })

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 gap-8">
      {/* Mobile menu button */}
      <button className="md:hidden flex items-center px-4 py-2 bg-gray-800 rounded mb-4" onClick={toggleMobileMenu}>
        <span className="mr-2">Components</span>
        <svg
          className={`w-4 h-4 transition-transform ${isMobileMenuOpen ? "transform rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-[#0d0d0d] rounded-lg p-4 md:sticky md:top-24 h-fit`}
      >
        <h3 className="text-xl font-bold mb-4 text-white">Components</h3>

        {/* Tabs */}
        <div className="flex mb-4 border-b border-gray-800">
          {["Library", "Arweave", "Template"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-3 text-sm font-medium ${
                activeTab === tab ? "text-white border-b-2 border-zinc-400" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "Library" && (
          <>
            {Object.keys(categorizedComponents).map((category) => (
              <div key={category} className="mb-6">
                <h4 className="text-gray-400 uppercase text-xs tracking-wider mb-2">{category}</h4>
                <ul className="space-y-1">
                  {categorizedComponents[category].map((component) => (
                    <li key={component.id}>
                      <Link
                        to={`/docs/${component.id}`}
                        className={`block py-1 px-2 rounded ${
                          activeComponent === component.id ? "px-4 py-1 bg-white text-black rounded-md hover:bg-zinc-200 transition-colors flex items-center" : "hover:bg-zinc-800"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {component.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )}

        {activeTab === "Arweave" && (
          <div className="py-4">
            <a
              href="https://arweave-components.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className=" px-4 py-2 bg-white text-black rounded-md hover:bg-zinc-200 transition-colors  flex justify-center items-center text-center"
            >
              Browse Arweave Functional Components
            </a>
          </div>
        )}

        {activeTab === "Template" && <div className="py-4 text-gray-300">Web3 Specifics Templates coming soon</div>}

        <div className="mt-8 pt-4 border-t border-gray-800">
          <h4 className="text-gray-400 uppercase text-xs tracking-wider mb-2">Resources</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="https://github.com/RuffledZest/MarkOne_ArDacityUI"
                target="_blank"
                rel="noreferrer"
                className="block py-1 px-2 rounded hover:bg-gray-800"
              >
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/org/ar-dacity"
                target="_blank"
                rel="noreferrer"
                className="block py-1 px-2 rounded hover:bg-gray-800"
              >
                NPM Packages
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  )
}
