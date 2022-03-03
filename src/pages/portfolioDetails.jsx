import React, { useEffect } from "react";
import Jumbotron from '../components/jumbotron';
import Paragraph from '../components/paragraphs';

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
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                } />
            <div className="container py-5">
                {cards.map(_ => {
                    return (
                        <Paragraph />)
                })}
            </div>
        </>
    );
}

export default PortfolioDetails;