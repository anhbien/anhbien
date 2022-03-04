import React from "react";
import Logo from "../images/ColorReverse.png";
import GithubLogo from "../images/github.png";
import LinkedinLogo from "../images/linkedin.png";
import { Link } from "react-router-dom";

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
                                <li className="d-block d-lg-inline p-2">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="d-block d-lg-inline p-2">
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="d-block d-lg-inline p-2">
                                    <Link to="/resume">Resume</Link>
                                </li>
                                <li className="d-block d-lg-inline p-2">
                                    <a href="mailto:contact@anhnbien.com">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-12 col-lg-4 text-lg-end">
                        <a className="d-inline pe-2" target="_blank" href="https://www.linkedin.com/in/anhbien" title="LinkedIn">
                            <img src={LinkedinLogo} width="24" alt="LinkedIn" />
                        </a>
                        <a className="d-inline" target="_blank" href="https://github.com/anhbien" title="Github">
                            <img src={GithubLogo} width="24" alt="Github" />
                        </a>
                    </div>
                </div>
                <div className="row text-center pt-4">
                    <div className="col-12">
                        <span>&copy; <script>
                            document.write(new Date().getUTCFullYear());
                        </script> Anh Bien. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>);
}

export default Footer;