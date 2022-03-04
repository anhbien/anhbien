import React, { useEffect } from "react";
import Jumbotron from '../components/jumbotron';
import SkillTile from '../components/skillTile';
import TimeLine from '../components/timeLine';
import GithubLogo from "../images/github.png";
import LinkedinLogo from "../images/linkedin.png";

function Resume() {
    const cards = ['one', 'two', 'three', 'one'];
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Jumbotron
                topElement={<h1>Resume</h1>}
                bottomElement={
                    <>
                        <a className="d-inline pe-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anhbien" title="LinkedIn">
                            <img src={LinkedinLogo} width="24" alt="LinkedIn" />
                        </a>
                        <a className="d-inline" target="_blank" rel="noreferrer" href="https://github.com/anhbien" title="Github">
                            <img src={GithubLogo} width="24" alt="Github" />
                        </a>
                        <p className="pt-2"><strong>Objective:</strong> It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
                    </>
                } />
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="container">
                            <h2 className="text-heading">Skills</h2>
                            <div className="row">
                                {cards.map((_, i) => {
                                    return (
                                        <SkillTile key={i} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="container pt-3 d-none d-lg-block">
                            <h2 className="text-heading">Education</h2>
                            <h3>DePaul University</h3>
                            <p>Chicago, IL</p>
                            <em>November 2020 - present</em>
                            <h3>DePaul University</h3>
                            <p>Chicago, IL</p>
                            <em>November 2020 - present</em>
                            <h3>DePaul University</h3>
                            <p>Chicago, IL</p>
                            <em>November 2020 - present</em>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="container pt-3 pt-lg-0">
                            <h2 className="text-heading">Experience</h2>
                            <article className="timeline">
                                {cards.map((_, i) => {
                                    return (
                                        <TimeLine key={i} />
                                    )
                                })}
                            </article>
                        </div>
                    </div>
                    <div className="col-12 d-block d-lg-none">
                        <div className="container pt-5">
                            <h2 className="text-heading">Education</h2>
                            <h3>DePaul University</h3>
                            <p>Chicago, IL</p>
                            <em>November 2020 - present</em>
                            <h3>DePaul University</h3>
                            <p>Chicago, IL</p>
                            <em>November 2020 - present</em>
                            <h3>DePaul University</h3>
                            <p>Chicago, IL</p>
                            <em>November 2020 - present</em>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume;