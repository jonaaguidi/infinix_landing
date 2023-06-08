import { useEffect } from "react";

import AOS from 'aos';
import "aos/dist/aos.css";
import 'aos/dist/aos.css';

import infinixSoft_logo from "../../../public/imgs/Enterprises/InfinixSoft/logo-soft-black.svg"
import infinixSoft_image from "../../../public/imgs/Enterprises/InfinixSoft/block-7.png"

import infinixNFT_logo from "../../../public/imgs/Enterprises/InfinixNFT/logo-ntf.svg"
import infinixNFT_image from "../../../public/imgs/Enterprises/InfinixNFT/block-2.png"

import infinixGaming_logo from "../../../public/imgs/Enterprises/InfinixGaming/logo-gaming.svg"
import infinixGaming_image from "../../../public/imgs/Enterprises/InfinixGaming/block-gaming2.svg"

import infinixQA_logo from "../../../public/imgs/Enterprises/InfinixQA/logo-security.svg"
import infinixQA_image from "../../../public/imgs/Enterprises/InfinixQA/block-4.png"

import infinixVR_logo from "../../../public/imgs/Enterprises/InfinixVR/logo-vr.svg" 
import infinixVR_image from "../../../public/imgs/Enterprises/InfinixVR/block-3.png"

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
              <h1 className="text-black" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Descubre <span className="selected-whitebg">Soluciones digitales innovadoras:</span></h1>
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
                  <b>Infinix Soft</b> - Potencia tu presencia digital con un diseño integral de aplicaciones web y móviles,
                   desarrollo y lanzamiento de soluciones.
                </p>
                <p className="font-300 mb-lg-2">
                Desde el desarrollo de software personalizado hasta productos de aplicaciones independientes, nuestro equipo ofrece un conjunto completo de servicios para
                   ayudarte a tener éxito.
                </p>
              </div>
              <a href="https://infinixsoft.com" target="_blank" className="btn-black" rel="noreferrer noopener">
                Ver más
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
                  <b>Infinix NFT</b> Nuestro equipo está a la vanguardia de la revolución Blockchain, brindando servicios integrales
                  a empresas que buscan integrar la tecnología blockchain en su negocio. desde el desarrollo
                   contratos inteligentes personalizados en Ethereum para crear aplicaciones innovadoras impulsadas por blockchain, nuestro equipo está
                   equipado para manejar cualquier desafío.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                Con un profundo conocimiento del panorama de las criptomonedas, nos comprometemos a ofrecer servicios seguros y
                   soluciones confiables que aprovechan todo el potencial de la tecnología Blockchain.
                </p>
              </div>
              <a href="https://infinixnft.com" target="_blank" className="btn-black" rel="noreferrer noopener">
                Ver más
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
                  <b>Infinix Gaming</b> - Nos apasiona crear experiencias de juego inmersivas y entretenidas. Nuestro equipo de expertos desarrolladores y diseñadores trabajan incansablemente para dar vida a los juegos, desde aventuras llenas de acción hasta
                   Simulaciones relajantes.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">Con un
                   compromiso con la excelencia, superamos los límites de lo que es posible en los juegos y nos esforzamos por brindar
                   jugadores con experiencias inolvidables que los hacen volver por más.</p>
              </div>
              <div className="pb-10 pb-lg-0" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                <a className="btn-black" href="https://infinixgaming.com" target="_blank" rel="noreferrer noopener">Ver más</a>
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
                  <b>Infinix Quality Assurance</b>, Nuestra división de aseguramiento se compromete a proporcionar a nuestros clientes productos y servicios confiables y de alto rendimiento. Con un equipo de expertos calificados, nos aseguramos de que cada proyecto que entregamos cumpla con los más altos estándares de excelencia.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">
                En Infinix Quality Assurance, nos enorgullece brindar la calidad y el rendimiento que nuestros clientes esperan y merecen.
                </p>
              </div>
              <div className="pb-10 pb-lg-0" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">
                <a className="btn-black" href="https://infinixqa.com" target="_blank" rel="noopener noreferrer">Ver más</a>
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
                  <b>Infinix VR & AR</b> | A nuestro equipo le apasiona crear experiencias inmersivas que transporten a los usuarios a mundos nuevos y emocionantes. Con tecnologías VR y AR de vanguardia, damos vida a las visiones de nuestros clientes de formas que alguna vez fueron inimaginables.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="800">En nuestra división de creaciones de realidad virtual y realidad aumentada, superamos los límites de lo que es posible con estas tecnologías transformadoras para ofrecer experiencias verdaderamente únicas e inolvidables.</p>
              </div>
              <div className="pb-10 pb-lg-0" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="800">
                <a className="btn-black" href="https://infinixvrar.com" target="_blank" rel="noopener noreferrer">Ver más</a>
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
