import { useEffect } from 'react';
import WOW from 'wowjs';
import jarallax from 'jarallax/dist/jarallax.min.js';
import 'jarallax/dist/jarallax.css';
import "./Hero.css"

const Hero = () => {
  useEffect(() => {
    new WOW.WOW({
      live: true,
    }).init();
    jarallax(document.querySelectorAll('.jarallax'))
  }, [])

  return (
    <section id="home" className="bg-black content-space-t-4 content-space-b-lg-0 content-space-t-lg-3">
      <div className="container-xl">
        <div id="scrollbg">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div className="box_text-hero">
                <h1 className="title-hero text-white mb-5 wow fadeInUpSmall" data-wow-duration="1s" data-wow-delay=".3s">
                  Empowering innovation, driving progress, <span className="selected"> transforming <br /> industries</span>.
                </h1>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 ms-auto">
              <div className="position-relative h-100 pb-5 pb-lg-0">
                <div className="img-hero" data-jarallax-element="-45 0" data-disable-parallax-down="lg">
                  <img src="../../../public/imgs/Hero/hero-img.png" alt="Hero Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
