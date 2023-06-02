import '../styles/vendor.min.css';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import Preloader from '../components/components_ES/Preloader/Preloader';
import Header from "../components/components_ES/Header/Header";
import Hero from "../components/components_ES/Hero/Hero";
import About from "../components/components_ES/About/About";
import Enterprises from "../components/components_ES/Enterprises/Enterprises";
import Team from "../components/components_ES/Team/Team";
import SolutionsText from "../components/components_ES/SolutionsText/SolutionsText";
import Partners from "../components/components_ES/Partners/Partners";
import Footer from "../components/components_ES/Footer/Footer";
import CookiesModal from '../components/components_ES/Cookies/Cookies';
import BackToTopButton from '../components/components_ES/BackToTopButton/Button';


const Landing_ES = () => {
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

export default Landing_ES;
