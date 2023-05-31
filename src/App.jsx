import './styles/vendor.min.css'
import './App.css'
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader/Preloader.jsx';
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Enterprises from "./components/Enterprises/Enterprises"
import Team from "./components/Team/Team"
import SolutionsText from "./components/SolutionsText/SolutionsText"
import Partners from "./components/Partners/Partners"
import Footer from "./components/Footer/Footer"


function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2300);
  }, []);

  return (
    <>
      {!loaded && <Preloader />}
      {loaded && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Enterprises />
            <Team />
            <SolutionsText />
            <Partners />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App;

