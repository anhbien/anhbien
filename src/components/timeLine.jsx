import React from "react";

function Timeline(props) {
    const { companyName, title, location, period, jobs } = props;
    return (
        <section>
            <div className="content">
                <h3>{companyName}</h3>
                <p>
                    <i class="fa-regular fa-location-dot icon-xsmall"></i>
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