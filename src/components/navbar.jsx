import logo from '../images/Color.png';
import { NavLink } from "react-router-dom";
import { Navbar as ReactNavbar, Container } from 'react-bootstrap';

function Navbar() {
    return (
        <ReactNavbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-dark color-dark-hover">
            <Container>
                <ReactNavbar.Brand href="#"><img src={logo} width="64" alt="Logo" /></ReactNavbar.Brand>
                <ReactNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactNavbar.Collapse className="collapse navbar-collapse justify-content-end pt-3 pt-md-0" id="responsive-navbar-nav">
                    <ul className="navbar-nav border-bottom">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/" aria-current="page">HOME<span
                                className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/portfolio">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/resume">RESUME</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='mailto:contact@anhnbien.com'>CONTACT</a>
                        </li>
                    </ul>
                </ReactNavbar.Collapse>
            </Container>
        </ReactNavbar>
    );
}

export default Navbar;