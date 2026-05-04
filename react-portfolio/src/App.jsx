import './styles.css';
import useReveal from './hooks/useReveal';

import TopBanner  from './components/TopBanner';
import Header     from './components/Header';
import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Skills     from './components/Skills';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  useReveal();

  return (
    <>
      <TopBanner />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

