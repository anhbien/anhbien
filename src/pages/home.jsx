import React, { useEffect } from "react";
import Button from '../components/button';
import Card from '../components/card';
import Portrait from '../images/me.svg';
import { Projects } from '../data/projects';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const renderFeatureProject = () => {
        var returnedRender = [];

        var i, j, chunk = 3;
        for (i = 0, j = Projects.length; i < j; i += chunk) {
            let project = Projects.slice(i, i + chunk);
            returnedRender.push(
                <>
                    <div className="col-12 col-lg-8 py-1"><Card id={project[0].id} title={project[0].title} description={project[0].description} /></div>
                    <div className="col-12 col-lg-4">
                        <div>
                            <div className="py-1">
                                <Card id={project[1].id} title={project[1].title} description={project[1].description} />
                            </div>
                            <div className="py-1">
                                <Card id={project[2].id} title={project[2].title} description={project[2].description} />
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        return returnedRender;
    };
    return (
        <>
            <div className="vh-100 home-hero-bg text-light d-flex">
                <div className="container align-self-center justify-content-center">
                    <div className="row">
                        <div className="col-12 col-md-6 align-self-center text-center text-md-start">
                            <div className="display-4 text-highlight-bold typewriter"><p>Anh Bien</p></div>
                            <p className="display-4 text-thin">is a software developer with a passion in User Interface and User Experience</p>
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
                    {renderFeatureProject()}
                </div>
                <div className="pt-4 pb-5 text-center">
                    <Button text="VIEW MORE" to="/portfolio" />
                </div>
            </div>
        </>
    );
}

export default Home;