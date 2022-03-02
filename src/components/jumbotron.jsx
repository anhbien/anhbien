import React from "react";
import ColorLine from "./colorLine";

function Jumbotron() {
    return (
        <div className="mt-4 p-5 color-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6">
                        <h1>PROJECT NAME</h1>
                        <ColorLine />
                        <strong>Project description</strong>
                        <p>It uses utility classNamees for typography and spacing to space content out within the larger
                            container.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;