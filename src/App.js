import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
//import AboutSection from "./components/AboutSection";

export default function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="px-4 md:px-12 max-w-5xl mx-auto">
        <HomeSection />
        <ProjectsSection />
        {/*<AboutSection />*/}
      </main>
    </div>
  );
}
