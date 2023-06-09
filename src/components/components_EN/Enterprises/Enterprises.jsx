import { useEffect } from "react";

import AOS from 'aos';
import "aos/dist/aos.css";
import 'aos/dist/aos.css';

import infinixSoft_logo from "../../../../public/imgs/Enterprises/InfinixSoft/logo-soft-black.svg"
import infinixSoft_image from "../../../../public/imgs/Enterprises/InfinixSoft/block-7.png"

import infinixNFT_logo from "../../../../public/imgs/Enterprises/InfinixNFT/logo-ntf.svg"
import infinixNFT_image from "../../../../public/imgs/Enterprises/InfinixNFT/block-2.png"

import infinixGaming_logo from "../../../../public/imgs/Enterprises/InfinixGaming/logo-gaming.svg"
import infinixGaming_image from "../../../../public/imgs/Enterprises/InfinixGaming/block-gaming2.svg"

import infinixQA_logo from "../../../../public/imgs/Enterprises/InfinixQA/logo-security.svg"
import infinixQA_image from "../../../../public/imgs/Enterprises/InfinixQA/block-4.png"

import infinixVR_logo from "../../../../public/imgs/Enterprises/InfinixVR/logo-vr.svg" 
import infinixVR_image from "../../../../public/imgs/Enterprises/InfinixVR/block-3.png"

const Enterprises = () => {
  useEffect(() => {
    AOS.init({
      once: false, 
      easing: 'ease-out', 
    });
  }, []);

  return (
    <div className="container-xl" id="enterprises">
      {/* Title */}
      <section className="content-space-t-3 content-space-b-2 content-space-b-lg-0" id="holding">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-black" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Unlock <span className="selected-whitebg">Innovative Digital Solutions:</span></h1>
            </div>
          </div>
        </div>
      </section>
      {/* InfinixSoft */}
      <section className="content-space-b-2 content-space-b-lg-3">
        <div className="container-xl">
          <div className="row align-items-center border-b-black content-space-b-lg-3">
            <div className="col-lg-5" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
              <div className="mb-5">
                <img src={infinixSoft_logo} alt="Infinix Soft" />
              </div>
              <div className="pb-3">
                <p className="font-300">
                  <b>Infinix Soft</b> - Empowering your digital presence with comprehensive web and mobile app design,
                  development, and launch solutions.
                </p>
                <p className="font-300 mb-lg-2">
                  From custom software development to stand-alone app products, our team offers a full suite of services to
                  help you succeed.
                </p>
              </div>
              <a href="https://infinixsoft.com" target="_blank" className="btn-black" rel="noreferrer noopener">
                View more
              </a>
            </div>
            <div className="col-lg-7 pt-8 mb-10 mb-lg-0">
              <img
                src={infinixSoft_image}
                className="w-xs-100 mx-auto d-block"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                alt="Section Image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* InfinixNFT */}
      <section className="content-space-b-2 content-space-b-lg-3">
        <div className="container-xl">
          <div className="row align-items-center border-b-black content-space-b-lg-3">
            <div className="col-lg-5 order-lg-2">
              <div className="mb-5">
                <img
                  src={infinixNFT_logo}
                  alt="InfinixNFT"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                />
              </div>
              <div className="pb-3">
                <p className="font-300" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                  <b>Infinix NFT</b> Our team is at the forefront of the blockchain revolution, providing comprehensive
                  solutions for companies looking to integrate blockchain technology into their business. From developing
                  custom smart contracts on Ethereum to creating innovative blockchain-powered applications, our team is
                  equipped to handle any challenge.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                  With a deep understanding of the cryptocurrency landscape, we are committed to delivering secure and
                  reliable solutions that leverage the full potential of blockchain technology.
                </p>
              </div>
              <a href="https://infinixnft.com" target="_blank" className="btn-black" rel="noreferrer noopener">
                View more
              </a>
            </div>
            <div className="col-lg-7 order-lg-1 pt-8 mb-10 mb-lg-0">
              <img
                src={infinixNFT_image}
                alt="InfinixNFT"
                className="w-xs-100 mx-auto d-block"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </section>
      {/* InfinixGaming */}
      <section className="content-space-b-2 content-space-b-lg-3">
        <div className="container-xl">
          <div className="row align-items-center border-b-black">
            <div className="col-lg-5">
              <div className="mb-5">
                <img
                  src={infinixGaming_logo}
                  alt="InfinixGaming"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                />
              </div>
              <div className="pb-3">
                <p className="font-300" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                  <b>Infinix Gaming</b> - We are passionate about creating immersive and entertaining gaming experiences. Our team of skilled
                  developers and designers work tirelessly to bring games to life, from action-packed adventures to
                  relaxing simulations.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">With a
                  commitment to excellence, we push the boundaries of what´s possible in gaming and strive to provide
                  players with unforgettable experiences that keep them coming back for more.</p>
              </div>
              <div className="pb-10 pb-lg-0" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                <a className="btn-black" href="https://infinixgaming.com" target="_blank" rel="noreferrer noopener">View more</a>
              </div>
            </div>
            <div className="col-lg-7">
              <img
                src={infinixGaming_image}
                className="w-100 h-100"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </section>
      {/* InfinixQA */}
      <section className="content-space-b-2 content-space-b-lg-3">
        <div className="container-xl">
          <div className="row align-items-center border-b-black content-space-b-lg-3">
            <div className="col-lg-5 order-lg-2">
              <div className="mb-5">
                <img
                  src={infinixQA_logo}
                  alt="Infinix QA"
                  data-aos="fade-up"
                  data-aos-duration="1600"
                  data-aos-delay="1000"
                />
              </div>
              <div className="pb-3">
                <p className="font-300" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">
                  <b>Infinix Quality Assurance</b>, Our assurance division is committed to providing our clients with reliable and top-performing products and services. With a team of skilled experts, we ensure that every project we deliver meets the highest standards of excellence.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">
                  At Infinix Quality Assurance, we take pride in delivering the quality and performance that our clients expect and deserve.
                </p>
              </div>
              <div className="pb-10 pb-lg-0" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">
                <a className="btn-black" href="https://infinixqa.com" target="_blank" rel="noopener noreferrer">View more</a>
              </div>
            </div>
            <div className="col-lg-7 order-lg-1 mb-10 mb-lg-0">
              <img
                src={infinixQA_image}
                className="w-xs-100 mx-auto d-block"
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-delay="1000"
                alt="Infinix Cyber Security"
              />
            </div>
          </div>
        </div>
      </section>
      {/* InfinixVR/AR */}
      <section className="content-space-b-2 content-space-b-lg-3">
        <div className="container-xl">
          <div className="row align-items-center  content-space-b-lg-0">
            <div className="col-lg-5">
              <div className="mb-5">
                <img 
                  src={infinixVR_logo}
                  alt="Infinix VR/AR" 
                  data-aos="fade-up" 
                  data-aos-duration="1400" 
                  data-aos-delay="800"
                />
              </div>
              <div className="pb-3">
                <p className="font-300" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="800">
                  <b>Infinix VR & AR</b> | Our team is passionate about creating immersive experiences that transport users to new and exciting worlds. With cutting-edge VR and AR technologies, we bring our clients visions to life in ways that were once unimaginable.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="800">At our VR&AR creations division, we push the boundaries of what´s possible with these transformative technologies to deliver truly unique and unforgettable experiences.</p>
              </div>
              <div className="pb-10 pb-lg-0" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="800">
                <a className="btn-black" href="https://infinixvrar.com" target="_blank" rel="noopener noreferrer">View more</a>
              </div>
            </div>
            <div className="col-lg-7">
              <img
                src={infinixVR_image}
                className="w-100 h-100"
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-delay="800"
                alt="Infinix VR/AR"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprises;
