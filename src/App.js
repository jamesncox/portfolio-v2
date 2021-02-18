import React from 'react'
import './stylesheets/App.css'
import './stylesheets/Responsive.css'
import './stylesheets/NavMenu.css'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'

import Header from './components/layout/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Blog />
    </div>
  );
}

export default App;
