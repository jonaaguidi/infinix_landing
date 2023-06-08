import "./Partners.css"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

import cencosud_logo from "../../../../public/imgs/Partners/cencosud.png"
import cisco_logo from "../../../../public/imgs/Partners/cisco.png"
import ebay_logo from "../../../../public/imgs/Partners/ebay.png"
import fiberCorp_logo from "../../../../public/imgs/Partners/FiberCorp.jpg"
import infobae_logo from "../../../../public/imgs/Partners/infobae.jpg"
import sony_logo from "../../../../public/imgs/Partners/sony.png"
import mostaza_logo from "../../../../public/imgs/Partners/mostaza.jpg"
import personal_logo from "../../../../public/imgs/Partners/personal.jpg"


const Partners = () => {
    
    {/* Inicializo AOS para las Animaciones */ }
    const initializeAOS = () => {
        AOS.init({
            once: false,
            easing: 'ease-out',
        });
    };

    useEffect(() => {
        initializeAOS();
    }, []);

    return (
        <section className="content-space-3 content-space-b-lg-3 pt-8">
            <div className="container content-space-b-2">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="title-bold-1 infinix-title-black text-center mb-lg-5 wow fadeInUpSmall" data-wow-duration="1s" data-wow-delay=".2s"> Con la confianza de <span className="selected-whitebg">Líderes de la industria</span>: <br />Socios y clientes</h1>
                    </div>
                </div>
            </div>
            <div className="container-xl">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 align-items-center">
                    <div className="col mb-5">
                        <div className="mb-4 text-center" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                            <img src={cencosud_logo} className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src={cisco_logo} className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src={ebay_logo} className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src={fiberCorp_logo} className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src={infobae_logo} className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src={sony_logo} className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src={mostaza_logo} className="w-50" alt="" />
                        </div>
                    </div>
                    <div className="col mb-5" data-aos-delay="390" data-aos-duration="1280" data-aos="fade-up">
                        <div className="mb-4 text-center">
                            <img src={personal_logo} className="w-50" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners