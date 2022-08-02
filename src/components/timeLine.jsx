import React from "react";
import Location from "../images/location.svg";

function Timeline(props) {
    const { companyName, title, location, period, jobs } = props;
    return (
        <section>
            <div className="content">
                <h3>{companyName}</h3>
                <p>
                    <img src={Location} alt="location icon" className="img-responsive icon-small"/>
                    <span className="ps-2">{location}</span>
                </p>
                <strong>{title}</strong>
                <p><em>{period}</em></p>
                <ul>
                    {jobs.map(job => { return (<li>{job}</li>); })}
                </ul>
            </div>
        </section>
    );
}

export default Timeline;