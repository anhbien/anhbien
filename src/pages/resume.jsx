import React, { useEffect } from "react";
import Jumbotron from '../components/jumbotron';
import SkillTile from '../components/skillTile';
import TimeLine from '../components/timeLine';
import { Experience } from "../data/experience";
import { Skills } from "../data/skills";

function Resume() {
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
                            <i className="fa-brands fa-linkedin icon-small text-light"></i>
                        </a>
                        <a className="d-inline" target="_blank" rel="noreferrer" href="https://github.com/anhbien" title="Github">
                            <i className="fa-brands fa-github icon-small text-light"></i>
                        </a>
                        <p className="pt-2"><strong>Objective:</strong> Full-stack developer with a passion in building beautiful applications with great user experience.</p>
                    </>
                } />
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="container">
                            <h2 className="text-heading">Skills</h2>
                            <div className="row">
                                {Skills.map((skill, i) => {
                                    const { icon, skillName, skills } = skill;
                                    return (
                                        <SkillTile key={i} icon={icon} skillName={skillName} skills={skills} />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="container pt-3 d-none d-lg-block">
                            <h2 className="text-heading">Education</h2>
                            <h4 className="pt-3">M.S. in Human Computer Interaction</h4>
                            <p> Depaul University - Chicago, IL</p>
                            <em>September 2017 - March 2022</em>
                            <h4 className="pt-3">M.S. in Business Information Technology</h4>
                            <p>DePaul University - Chicago, IL</p>
                            <em>September 2012 - August 2014</em>
                            <h4 className="pt-3">B.S. in Information Technology</h4>
                            <p>University of Sciences - Ho Chi Minh City, Vietnam</p>
                            <em>September 2006 - September 2011</em>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="container pt-3 pt-lg-0">
                            <h2 className="text-heading">Experience</h2>
                            <article className="timeline">
                                {Experience.map(exp => {
                                    const { id, companyName, title, location, period, jobs } = exp;
                                    return (
                                        <TimeLine
                                            key={id}
                                            companyName={companyName}
                                            title={title}
                                            location={location}
                                            period={period}
                                            jobs={jobs}
                                        />
                                    )
                                })}
                            </article>
                        </div>
                    </div>
                    <div className="col-12 d-block d-lg-none">
                        <div className="container pt-5">
                            <h2 className="text-heading">Education</h2>
                            <h4 className="pt-3">M.S. in Human Computer Interaction</h4>
                            <p> Depaul University - Chicago, IL</p>
                            <em>September 2017 - March 2022</em>
                            <h4 className="pt-3">M.S. in Business Information Technology</h4>
                            <p>DePaul University - Chicago, IL</p>
                            <em>September 2012 - August 2014</em>
                            <h4 className="pt-3">B.S. in Information Technology</h4>
                            <p>University of Sciences - Ho Chi Minh City, Vietnam</p>
                            <em>September 2006 - September 2011</em>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume;