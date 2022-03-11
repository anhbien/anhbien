import React, { useEffect } from "react";
import Card from '../components/card';
import Jumbotron from '../components/jumbotron';
import { Projects } from '../data/projects';

function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Jumbotron
                topElement={<h1>PORTFOLIO</h1>}
                bottomElement={
                    <p>Here are some of my feature projects from research to design.</p>
                } />
            <div className='container py-5'>
                <h2>Current Projects</h2>
                <div className="row">
                    {Projects.map(project => {
                        return (
                            <div className="p-2 col-12 col-md-6 col-lg-4" key={project.id}>
                                <Card id={project.id} title={project.title} description={project.description} />
                            </div>)
                    })}
                </div>
            </div>
        </>
    );
}

export default Portfolio;