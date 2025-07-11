import React from "react";

export default function HomeSection() {
  return (
    <section id="home" className="py-16 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white/70 dark:bg-gray-800/80 rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold pb-4 mb-2 bg-gradient-to-r from-accent via-accent-light to-accent-dark bg-clip-text text-transparent text-center">
          Hi, I'm Tolga.
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8 text-center font-medium">
          A passionate developer building modern web experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="https://github.com/tolgabp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-lg font-semibold shadow hover:bg-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tolgabp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:tolgabarisp@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple via-secondary to-purple-dark text-white rounded-lg font-semibold shadow hover:from-purple-dark hover:to-secondary-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 4.99A2 2 0 0 1 4 3h16a2 2 0 0 1 1.99 1.99v14.02A2 2 0 0 1 20 21H4a2 2 0 0 1-1.99-1.99V4.99zm2.2.01l7.79 6.99 7.79-6.99H4.21zM20 19V7.24l-7.4 6.63a1 1 0 0 1-1.2 0L4 7.24V19h16z"/></svg>
            Mail me
          </a>
        </div>
      </div>
    </section>
  );
} 
