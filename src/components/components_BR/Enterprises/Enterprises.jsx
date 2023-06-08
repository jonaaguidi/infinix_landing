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
              <h1 className="text-black" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Desbloqueie <span className="selected-whitebg"> soluções digitais inovadoras:</span></h1>
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
                  <b>Infinix Soft</b> - Fortalecendo sua presença digital com soluções abrangentes de design, desenvolvimento e lançamento de aplicativos móveis e da Web.
                </p>
                <p className="font-300 mb-lg-2">
                  Do desenvolvimento de software personalizado a produtos de aplicativos independentes, nossa equipe oferece um conjunto completo de serviços para ajudá-lo a ter sucesso.
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
                  <b>Infinix NFT</b> Nossa equipe está na vanguarda da revolução blockchain, fornecendo soluções abrangentes para empresas que buscam integrar a tecnologia blockchain em seus negócios. Desde o desenvolvimento de contratos inteligentes personalizados no Ethereum até a criação de aplicativos inovadores baseados em blockchain, nossa equipe está preparada para lidar com qualquer desafio.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                Com um profundo conhecimento do cenário das criptomoedas, estamos comprometidos em oferecer segurança e
                   soluções confiáveis que aproveitam todo o potencial da tecnologia blockchain.
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
                  <b>Infinix Gaming</b> - Somos apaixonados por criar experiências de jogo envolventes e divertidas. Nossa equipe de qualificados
                   desenvolvedores e designers trabalham incansavelmente para dar vida aos jogos, de aventuras cheias de ação a
                   simulações relaxantes.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">Com um
                   compromisso com a excelência, ultrapassamos os limites do que é possível em jogos e nos esforçamos para fornecer
                   jogadores com experiências inesquecíveis que os fazem voltar para mais.</p>
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
                  <b>Infinix Quality Assurance</b>, Nossa divisão de garantia está empenhada em fornecer aos nossos clientes produtos e serviços confiáveis e de alto desempenho. Com uma equipe de especialistas qualificados, garantimos que cada projeto que entregamos atenda aos mais altos padrões de excelência.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">
                Na Infinix Quality Assurance, temos orgulho em oferecer a qualidade e o desempenho que nossos clientes esperam e merecem.
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
                  <b>Infinix VR & AR</b> | Nossa equipe é apaixonada por criar experiências imersivas que transportam os usuários para mundos novos e empolgantes. Com tecnologias de VR e AR de ponta, damos vida às visões de nossos clientes de maneiras que antes eram inimagináveis.
                </p>
                <p className="font-300 mb-lg-2" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="800">Em nossa divisão de criações VR&AR, ultrapassamos os limites do que é possível com essas tecnologias transformadoras para oferecer experiências verdadeiramente únicas e inesquecíveis.</p>
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
