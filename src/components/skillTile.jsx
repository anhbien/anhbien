import React from "react";

function SkillTile(props) {
    const { icon, skillName, skills } = props;
    return (
        <div className="p-2 col-12 col-md-6 col-lg-12">
            <div className="container">
                <div className="row text-start text-md-center text-lg-start">
                    <div className="col-3 col-md-12 col-lg-3">
                        <i className={`icon-large ${icon}`}></i>
                    </div>
                    <div className="col-9 col-md-12 col-lg-9">
                        <strong>{skillName}</strong>
                        <p>
                            {skills.map(skill => {
                                return (
                                    <span className="badge rounded-pill bg-secondary me-1">{skill}</span>
                                )
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillTile;