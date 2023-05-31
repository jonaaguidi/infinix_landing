import { useEffect } from 'react';
import jarallax from 'jarallax/dist/jarallax.min.js';
import 'jarallax/dist/jarallax.css';
import "./About.css"

const About = () => {
    useEffect(() => {
        jarallax(document.querySelectorAll('.jarallax'));
    
        const handleScroll = () => {
          const scrollBg = document.getElementById('scrollbg2');
          if (scrollBg) {
            const opacity = 1 - window.scrollY / 1250;
            scrollBg.style.opacity = opacity;
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <div id="about-us" className="bg-black content-space-t-1 content-space-b-2 content-space-t-lg-2 content-space-b-lg-4">
            <div className="container-xl">
                <div id="scrollbg2">
                    <div className="row pb-5 pb-lg-10">
                        <div className="col-lg-3">
                            <h3 className="font-700 wow fadeInUpSmall mb-7" data-wow-duration="1s" data-wow-delay=".1s">About us</h3>
                        </div>
                        <div className="col-lg-9">
                            <div>
                                <h4 className="display-6 font-300 wow fadeInUpSmall" data-wow-duration="1s" data-wow-delay=".2s">Infinix Holding Group®: empowering digital success through comprehensive technology solutions.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="border-t-white pt-8">
                                <h3 className="font-300 wow fadeInUpSmall" data-wow-duration="1s" data-wow-delay=".2s">Digital solutions for limitless potential</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
