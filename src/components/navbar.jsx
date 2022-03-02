import logo from '../images/Color.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark color-dark-hover">
            <div className='container'>
                <a className="navbar-brand" href="#">
                    <img src={logo} width="64" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" aria-current="page">HOME<span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">RESUME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </ul>
                </div></div>
        </nav>
    );
}

export default Navbar;