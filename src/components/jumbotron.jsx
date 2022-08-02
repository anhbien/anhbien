import React from "react";
import ColorLine from "./colorLine";

function Jumbotron(props) {
    const { topElement, bottomElement, sideImage } = props
    return (
        <div className="p-5 color-dark text-light">
            <div className="container">
                <div className="row">
                    <div className={sideImage? "col-md-6 py-5" : "col-12 py-5 col-md-8 col-lg-6" }>
                        {topElement}
                        <ColorLine />
                        {bottomElement}
                    </div>
                    {sideImage &&
                        <div className="col-md-6 text-end d-none d-md-block max-height">
                            <img src={sideImage} alt="Portrait" className="img-responsive h-100"/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default Jumbotron;