import React from "react";
import Button from '../components/button';
import Card from '../components/card';
import Portrait from '../images/me.png';

function Home() {
    const cards = ['one', 'two', 'three', 'one', 'two', 'three'];
    return (
        <>
            <div className="vh-100 home-hero-bg text-light d-flex">
                <div className="container align-self-center justify-content-center">
                    <div className="row">
                        <div className="col-12 col-md-6 align-self-center text-center text-md-start">
                            <p className="display-4 text-highlight-bold">Anh Bien</p>
                            <p className="display-4 text-thin">is a software developer with a passion in User Interfvace and User Experience</p>
                            <div className="pt-4">
                                <Button type="default" text="LEARN MORE" to="/resume" />
                            </div>
                        </div>
                        <div className="col-md-6 text-center d-none d-md-block">
                            <img src={Portrait} alt="Portrait" className="w-75 img-responsive" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pt-5'>
                <h2>PORTFOLIO</h2>
                <p>Feature projects</p>
                <div className="row">
                    {cards.map(_ => {
                        return (
                            <div className="p-2 col-12 col-md-6 col-lg-4">
                                <Card />
                            </div>)
                    })}
                </div>
                <div className="pt-4 pb-5 text-center">
                    <Button text="VIEW MORE" to="/portfolio" />
                </div>
            </div>
        </>
    );
}

export default Home;