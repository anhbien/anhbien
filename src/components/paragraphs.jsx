import React from "react";
import Thumbnail from "../images/Thumbnail.jpg";

function Paragraph() {
    return (
        <section className="row py-3">
            <div className="col-12">
                <h2 className="heading-text">Heading 1 Text</h2>
            </div>
            <div className="col-12 col-lg-6">
                <h3>Heading 2 Text</h3>
                <p>Culpa qui officia deserunt mollit anim id esto polujimi laborum. Sed ut
                    perspiciatis unde omnis iste eropluk onatuspop error sit voluptartem accusantium
                    wetrop doloremque laudantium, totam rem aperiam, eaquep ipsa quaeer ab illo
                    inventore veritatisy et quasi weth ropeior architecto beatae vitae dicta sunt
                    explicapbo. Nemo popul eniem ipsam yui voluptatem quialoperyi voluptas sit
                    aspernatur aute odit aut fugit, sed quiawi consequuntur joki erty magni dolores
                    eosep quiklopii ratione wertyuil voluptatem sequi nesciunt.</p>
            </div>
            <div className="col-12 col-lg-6 text-center">
                <img src={Thumbnail} className="img-responsive w-100 rounded" alt="Alt Text" />
                <em>Fig.1. Thumbnail description</em>
            </div>
        </section>
    );
}

export default Paragraph;