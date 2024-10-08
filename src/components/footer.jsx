import React from "react";
import Logo from "../images/LogoReverse.svg";
import { Link } from "react-router-dom";
import ResumeFile from '../data/AnhBien_Resume.pdf';

function Footer() {
    return (
        <footer className="color-dark-hover text-light py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 col-lg-8">
                        <nav className="text-center text-lg-start">
                            <ul className="p-0">
                                <li className="d-block d-lg-inline p-2">
                                    <Link to="/">
                                        <img src={Logo} width="64" alt="Logo" />
                                    </Link></li>
                                {/* <li className="d-block d-lg-inline p-2">
                                    <Link className="link-light" to="/">Home</Link>
                                </li>
                                <li className="d-block d-lg-inline p-2">
                                    <Link className="link-light" to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="d-block d-lg-inline p-2">
                                    <Link className="link-light" to="/resume">Resume</Link>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-12 col-lg-4 text-lg-end">
                        <a className="d-inline pe-2 link-light" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anhbien" title="LinkedIn">
                            <i className="fa-brands fa-linkedin icon-small"></i>
                        </a>
                        <a className="d-inline pe-2" target="_blank" rel="noreferrer" href="https://github.com/anhbien" title="Github">
                            <i className="fa-brands fa-github icon-small link-light"></i>
                        </a>
                        <a className="d-inline" target="_blank" rel="noreferrer" href={ResumeFile} title="Download Resume">
                            <i className="fa-solid fa-download icon-small link-light"></i>
                        </a>
                    </div>
                </div>
                <div className="row text-center pt-4">
                    <div className="col-12">
                        <span><strong>&copy; </strong>{new Date().getFullYear()} Anh Bien. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>);
}

export default Footer;