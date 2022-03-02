import React from "react";
import Card from '../components/card';
import Jumbotron from '../components/jumbotron';

function Portfolio() {
    const cards = ['one', 'two', 'three', 'one', 'two', 'three'];
    return (
        <>
            <Jumbotron />
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