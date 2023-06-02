import '../styles/vendor.min.css';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import Preloader from '../components/components_BR/Preloader/Preloader';
import Header from "../components/components_BR/Header/Header";
import Hero from "../components/components_BR/Hero/Hero";
import About from "../components/components_BR/About/About";
import Enterprises from "../components/components_BR/Enterprises/Enterprises";
import Team from "../components/components_BR/Team/Team";
import SolutionsText from "../components/components_BR/SolutionsText/SolutionsText";
import Partners from "../components/components_BR/Partners/Partners";
import Footer from "../components/components_BR/Footer/Footer";
import CookiesModal from '../components/components_BR/Cookies/Cookies';
import BackToTopButton from '../components/components_BR/BackToTopButton/Button';


const Landing_BR = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2200);
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
          <CookiesModal />
          <BackToTopButton />
        </>
      )}
    </>
  );
};

export default Landing_BR;
