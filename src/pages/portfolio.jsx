import React, { useEffect } from "react";
import Card from '../components/card';
import Jumbotron from '../components/jumbotron';

function Portfolio() {
    const cards = ['one', 'two', 'three', 'one', 'two', 'three'];
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Jumbotron
                topElement={<h1>PORTFOLIO</h1>}
                bottomElement={
                    <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                } />
            <div className='container py-5'>
                <p>My current projects</p>
                <div className="row">
                    {cards.map(_ => {
                        return (
                            <div className="p-2 col-12 col-md-6 col-lg-4">
                                <Card />
                            </div>)
                    })}
                </div>
            </div>
        </>
    );
}

export default Portfolio;