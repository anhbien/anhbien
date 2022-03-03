import React, { useEffect } from "react";
import Jumbotron from '../components/jumbotron';
import Thumbnail from "../images/Thumbnail.jpg";

function PortfolioDetails() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const cards = ['one', 'two', 'three', 'one', 'two', 'three'];
    return (
        <>
            <Jumbotron
                topElement={<h1>PROJECT NAME</h1>}
                bottomElement={
                    <p>It uses utility classNames for typography and spacing to space content out within the larger container.</p>
                } />
            <article className="container py-5">
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
                <section className="row py-3">
                    <div className="col-12">
                        <h2 className="heading-text">Heading 1 Text</h2>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-1">
                        <h3>Heading 2 Text</h3>
                        <p>Culpa qui officia deserunt mollit anim id esto polujimi laborum. Sed ut
                            perspiciatis unde omnis iste eropluk onatuspop error sit voluptartem accusantium
                            wetrop doloremque laudantium, totam rem aperiam, eaquep ipsa quaeer ab illo
                            inventore veritatisy et quasi weth ropeior architecto beatae vitae dicta sunt
                            explicapbo. Nemo popul eniem ipsam yui voluptatem quialoperyi voluptas sit
                            aspernatur aute odit aut fugit, sed quiawi consequuntur joki erty magni dolores
                            eosep quiklopii ratione wertyuil voluptatem sequi nesciunt.</p>
                    </div>
                    <div className="col-12 col-lg-6 text-center order-lg-0">
                        <img src={Thumbnail} className="img-responsive w-100 rounded" alt="Alt Text" />
                        <em>Fig.1. Thumbnail description</em>
                    </div>
                </section>
            </article>
        </>
    );
}

export default PortfolioDetails;