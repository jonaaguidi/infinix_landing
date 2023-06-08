import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

import designRush from "../../../public/imgs/Footer/design_rush.png";
import clutch from "../../../public/imgs/Footer/clutch.png";
import twitter_logo from "../../../public/imgs/Footer/Social/ic-twitter.svg";
import instagram_logo from "../../../public/imgs/Footer/Social/ic-instagram.svg";
import linkedin_logo from "../../../public/imgs/Footer/Social/ic-linkedin.svg";


const Footer = () => {

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
        <footer id="contact" className="bg-black footer">
            <div className="content-space-1 content-space-b-lg-2 content-space-t-lg-3 bg-black">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content-space-b-lg-1">
                                <h1 className="text-white" data-aos-delay="100" data-aos-duration="1000" data-aos="fade-in">Entre em contato com <br /> equipe de vendas</h1>
                                <p className="text-color-light-gray">Conecte-se com nossa equipe para saber mais sobre nossos serviços</p>
                            </div>
                            <ul className="list-checked list-checked-success mb-0 pe-lg-6">
                                <li className="list-checked-item" data-aos-delay="200" data-aos-duration="1000" data-aos="fade-in"><b>Miami</b>: 360 NE 75 st. Miami, Suite #127, Florida 33138 United States.</li>
                                <li className="list-checked-item arrow-white" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-in"><b>New York</b>: 175 Varick St. New York, NY. 10013. United States</li>
                                <li className="list-checked-item arrow-white" data-aos-delay="300" data-aos-duration="1000" data-aos="fade-in"><b>Buenos Aires</b>: Av.Rivadavia 18451, Buenos Aires. Argentina</li>
                                <li className="list-checked-item" data-aos-delay="400" data-aos-duration="1000" data-aos="fade-in"><b>Reach us</b>: <a className="infinix-text-white" href="mailto:info@infinixnft.com">info@infinixsoft.com</a></li>
                                <li className="list-checked-item arrow-pink" data-aos-delay="500" data-aos-duration="1000" data-aos="fade-in"><b>+1 (877) 789 8761</b></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 ps-lg-5 mt-10 mt-lg-0">
                            <form id="holding-contact-form-index" data-aos="fade-in" data-aos-delay="400" data-aos-duration="1000">
                                <div className="mb-4">
                                    <input type="text" className="form-control form-control-lg" name="formName" id="formName" placeholder="Name" aria-label="First" />
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control form-control-lg" name="formEmail" id="formEmail" placeholder="Email" aria-label="Email" />
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control form-control-lg" name="formCompany" id="formCompany" placeholder="Company" aria-label="Company" />
                                </div>
                                <div className="mb-4">
                                    <textarea className="form-control form-control-lg" name="formMessage" id="formMessage" placeholder="Message" aria-label="Message" rows="4"></textarea>
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="btn-white">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container border-top-gray content-space-t-2 content-space-b-1">
                <div className="row">
                    <div className="col-lg-3 mb-5 mb-md-0">
                        <ul className="list-unstyled list-py-1 mb-0" data-aos-delay="100" data-aos-duration="1000" data-aos="fade-in">
                            <li><a className="text-white" href="https://infinixholdinggroup.com" target="_blank" rel="noreferrer noopener"><b>Infinix</b> Holding Group</a></li>
                            <li><a className="text-white" href="https://infinixnft.com" target="_blank" rel="noreferrer noopener"><b>Infinix</b> NFT Factory</a></li>
                            <li><a className="text-white" href="https://infinixgaming.com" target="_blank" rel="noreferrer noopener"><b>Infinix</b> Gaming</a></li>
                        </ul>
                        <ul className="list-unstyled list-py-1 mb-0" data-aos-delay="100" data-aos-duration="1000" data-aos="fade-in">
                            <li><a className="text-white" href="https://infinixqa.com" target="_blank" rel="noreferrer noopener"><b>Infinix</b> Quality Assurance</a></li>
                            <li><a className="text-white" href="https://www.infinixar.com" target="_blank" rel="noreferrer noopener"><b>Infinix</b> VR / AR Development</a></li>
                            <li><a className="text-white" href="https://infinixsoft.com" target="_blank" rel="noreferrer noopener"><b>Infinix</b> Soft</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mb-5 mb-md-0">
                        <ul className="list-unstyled list-py-1 mb-0" data-aos-delay="200" data-aos-duration="1000" data-aos="fade-in">
                            <li><a href="#about-us" className="text-white">About us</a></li>
                            <li><a href="#services" className="text-white">Services</a></li>
                            <li><a href="#projects" className="text-white">Projects</a></li>
                            <li><a href="#team" className="text-white">Team</a></li>
                            <li><a href="partner/" target="_blank" className="text-white"><b>Partner / Referrals</b></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 mb-5 mb-md-0"></div>
                    <div className="col-lg-2 mb-5 mb-md-0">
                        <ul className="list-unstyled list-py-1 mb-0  prensa" data-aos-delay="100" data-aos-duration="1000" data-aos="fade-in">
                            <li className="text-center"><a href="https://upcity.com/mobile-app-development/ipad/miami-fl?spotlight=profiles%2Finfinixsoft%2Fmiami" target="_blank" rel="noreferrer noopener"><img src="https://upcity-marketplace.s3.amazonaws.com/badge/335/basic_full_color/bda715c5d792e9e6eb4f7ea65a4cd926.png" width="80" alt="TOP IPAD DEVELOPER" /></a></li>
                            <li className="text-center"><a href="https://www.expertise.com/fl/miami/mobile-app-development" target="_blank" style={{ display: 'inline-block', border: '0' }} rel="noreferrer noopener"><img style={{ display: 'block' }} src="//cdn.expertise.com/awards/fl_miami_mobile-app-development_2020_inverse.svg" width="100" alt="Best Mobile App Developers in Miami" /></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 mb-5 mb-md-0">
                        <ul className="list-unstyled list-py-1 mb-0  prensa" data-aos-delay="100" data-aos-duration="1000" data-aos="fade-in">
                            <li className="text-center">
                                <a href="https://www.designrush.com/agency/profile/infinixsoft" target="_blank" rel="noreferrer noopener">
                                    <img src={designRush} alt="Design Rush" width="60" />
                                </a>
                            </li>
                            <li className="text-center" style={{ paddingTop: '2rem', marginTop: '0 !important' }}>
                                <a href="https://clutch.co/profile/infinixsoft#reviews" target="_blank" rel="noreferrer noopener">
                                    <img src={clutch} alt="Clutch" width="120" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start mt-4">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item" data-aos-delay="500" data-aos-duration="1000" data-aos="fade-in">
                                <a className="btn btn-sm btn-icon" href="https://www.twitter.com/Infinixsoft/" target="_blank" rel="noreferrer noopener">
                                    <img src={twitter_logo} alt="Twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item" data-aos-delay="600" data-aos-duration="1200" data-aos="fade-in">
                                <a className="btn btn-sm btn-icon" href="https://www.instagram.com/infinixsoft_ok/" target="_blank" rel="noreferrer noopener">
                                    <img src={instagram_logo} alt="Instagram" />
                                </a>
                            </li>
                            <li className="list-inline-item" data-aos-delay="700" data-aos-duration="1200" data-aos="fade-in">
                                <a className="btn btn-sm btn-icon" href="https://www.linkedin.com/company/1065325/" target="_blank" rel="noreferrer noopener">
                                    <img src={linkedin_logo} alt="LinkedIn" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row content-space-t-3">
                    <div className="col-lg-12">
                        <p className="text-white mb">© Copyright 2009 - 2023
                            <br />
                            InfinixSoft Global LLC | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer