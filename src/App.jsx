// src/App.jsx
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience'; 
import Projects from './components/Projects'; 
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="max-w-5xl mx-auto p-6 space-y-20">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
