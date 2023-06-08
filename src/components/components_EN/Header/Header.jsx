import "./Header.css"
import logotype from "../../../..//public/imgs/Header/logo.svg"
import usa_flag from "../../../../public/imgs/Header/united-states-of-america.png"
import spain_flag from "../../../../public/imgs/Header/spain.png"
import brazil_flag from "../../../../public/imgs/Header/brazil.png"

const Header = () => {
    return (
        <header id="header" className="navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light navbar-show-hide bg-white">
            <div className="container-xl">
                <nav className="navbar-nav-wrap">
                    <a className="navbar-brand" href="#">
                        <img className="navbar-brand-logo" src={logotype} alt="Infinix Holding Group" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSite" aria-controls="navbarSite" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarSite">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link scrollto" href="#home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="#about-us">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="#holding">HOLDING</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="/partner/">PARTNER</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="#team">TEAM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link scrollto" href="#contact">CONTACT</a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-brand" href="/" style={{ marginRight: '0.5rem' }}>
                                    <img className="navbar-brand flag" src={usa_flag} alt="Infinix Soft" />
                                </a>
                                <a className="navbar-brand" href="/es" style={{ marginRight: '0.5rem' }}>
                                    <img className="navbar-brand flag" src={spain_flag} alt="Infinix Soft" />
                                </a>
                                <a className="navbar-brand" href="/br">
                                    <img className="navbar-brand flag" src={brazil_flag} alt="Infinix Soft" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;