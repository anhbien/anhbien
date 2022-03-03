import React from "react";
import ColorLine from "./colorLine";

function Jumbotron(props) {
    const { topElement, bottomElement } = props
    return (
        <div className="p-5 color-dark text-light">
            <div className="py-5 container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6">
                        {topElement}
                        <ColorLine />
                        {bottomElement}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Jumbotron;