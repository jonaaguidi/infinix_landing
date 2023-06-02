import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SolutionsText = () => {
  useEffect(() => {
    AOS.init({ 
      once: true,
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <section data-aos-delay="290" data-aos-duration="1180" data-aos="fade-up" style={{ borderTop: '1px solid white' }}  className="bg-black content-space-t-1 content-space-b-2 content-space-t-lg-2 content-space-b-lg-3 " data-aos="fade-up">
      <div className="container bg-black content-space-1 content-space-lg-3 px-5 px-lg-10">
        <div className="row align-items-start">
          <div className="col-lg-4 mb-5 mb-lg-0 text-color-light-gra">
            <h1 className="display-1 text-color-light-gray">56.890</h1>
            <h4 className="display-6 font-300 text-color-light-gray">Hours</h4>
          </div>
          <div className="col-lg-8">
            <h2 className="font-300 mb-0 text-color-light-gray"><span style={{backgroundColor:"white" , padding:"2px", color:"black"}}>Unlock Your Brand´s Potential with Our Dynamic Solutions.</span> Discover the Power of Innovation and Expertise in Gaming, NFTs, VR/AR, Social Media Campaigns, Quality Assurance, Marketing, and B2B Lead Generation. Join Forces with a Team that Shares Your Passion for Success.</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsText;


