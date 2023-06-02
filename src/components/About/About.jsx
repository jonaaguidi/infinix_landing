import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const initializeAOS = () => {
    AOS.init({
      once: false,
      easing: 'ease-out',
    });
  };

  const handleScroll = () => {
    const scrollBg = document.getElementById('scrollbg2');
    if (scrollBg) {
      const opacity = 1 - window.scrollY / 1150;
      scrollBg.style.opacity = opacity;
    }
  };

  useEffect(() => {
    initializeAOS();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="about-us" className="bg-black content-space-t-1 content-space-b-2 content-space-t-lg-2 content-space-b-lg-4">
      <div className="container-xl">
        <div id="scrollbg2" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
          <div className="row pb-5 pb-lg-10">
            <div className="col-lg-3">
              <h3 className="font-700 mb-7" >About us</h3>
            </div>
            <div className="col-lg-9">
              <div>
                <h4 className="display-6 font-300" data-aos-duration="1280" data-aos-delay="390"><span style={{backgroundColor:"white" , padding:"2px", color:"black"}}>Infinix Holding Group®</span>: empowering digital success through comprehensive technology solutions.</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="border-t-white pt-8">
                <h3 className="font-300" data-aos-duration="1280" data-aos-delay="390">Digital solutions for limitless potential</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


