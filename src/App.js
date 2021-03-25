import "./stylesheets/App.css";
import "./stylesheets/Responsive.css";
import "./stylesheets/NavMenu.css";
import "./stylesheets/Collapsible.css";
import Header from "./components/layout/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
