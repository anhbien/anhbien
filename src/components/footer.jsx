import React from "react";
import Logo from "../images/ColorReverse.png";
import GithubLogo from "../images/github.png";
import LinkedinLogo from "../images/linkedin.png";

function Footer() {
    return (
        <footer className="color-dark-hover text-light py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 col-lg-8">
                        <nav className="text-center text-lg-left">
                            <ul className="p-0">
                                <li className="d-block d-lg-inline p-1">
                                    <a href="#">
                                        <img src={Logo} width="64" alt="Logo" />
                                    </a></li>
                                <li className="d-block d-lg-inline p-1">
                                    <a href="#">Home</a>
                                </li>
                                <li className="d-block d-lg-inline p-1">
                                    <a href="#">Portfolio</a>
                                </li>
                                <li className="d-block d-lg-inline p-1">
                                    <a href="#">Resume</a>
                                </li>
                                <li className="d-block d-lg-inline p-1">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-12 col-lg-4 text-lg-right">
                        <a className="d-inline pr-1" href="#" title="LinkedIn">
                            <img src={LinkedinLogo} width="24" alt="LinkedIn" />
                        </a>
                        <a className="d-inline" href="#" title="Github">
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