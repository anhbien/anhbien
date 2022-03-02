import React from "react";
import Jumbotron from '../components/jumbotron';
import Paragraph from '../components/paragraphs';

function PortfolioDetails() {
    const cards = ['one', 'two', 'three', 'one', 'two', 'three'];
    return (
        <>
            <Jumbotron />
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