import React from "react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-accent dark:text-accent-light">Live Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/80 dark:bg-gray-800/90 rounded-2xl shadow-xl p-6 flex flex-col justify-between border-2 border-transparent hover:border-secondary dark:hover:border-secondary-light transition-all duration-200 group">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-accent-dark dark:text-accent-light group-hover:text-accent transition-colors">NASA Space Explorer</h3>
            <span className="inline-block mb-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-dark dark:bg-secondary-dark/30 dark:text-secondary-light text-xs font-semibold tracking-widest uppercase">Web App</span>
            <p className="text-gray-700 dark:text-gray-300 mb-4">A web app to explore NASA's APIs and discover space images, facts, and more. Built for space enthusiasts and curious minds.</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://nasa-explorer-bb11a4ed8b3a.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-white rounded-lg font-semibold shadow hover:bg-accent-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">Live Demo</a>
            <a href="https://github.com/tolgabp/nasa-explorer" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-lg font-semibold shadow hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">GitHub</a>
          </div>
        </div>
        <div className="bg-white/80 dark:bg-gray-800/90 rounded-2xl shadow-xl p-6 flex flex-col justify-between border-2 border-transparent hover:border-secondary dark:hover:border-secondary-light transition-all duration-200 group">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-accent-dark dark:text-accent-light group-hover:text-accent transition-colors">Airline Cloud Modernisation</h3>
            <span className="inline-block mb-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-dark dark:bg-secondary-dark/30 dark:text-secondary-light text-xs font-semibold tracking-widest uppercase">Web App</span>
            <p className="text-gray-700 dark:text-gray-300 mb-4">A frontend connects to a cloud backend, which integrates with a simulated reservation system. When a delay happens, a recommendation engine suggests alternative flights, helping users rebook instantly.</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://airline-frontend-eu-532637077845.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-accent text-white rounded-lg font-semibold shadow hover:bg-accent-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">Live Demo</a>
            <a href="https://github.com/tolgabp/airlineCloudModernisation" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-lg font-semibold shadow hover:bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
} 