import React from "react";
import Code from "../images/code.svg";
import Design from "../images/design.svg";

function SkillTile(props) {
    const { icon, skillName, skills } = props;
    let skillIcon;
    switch(icon){
        case "code":
            skillIcon=Code;
            break;
        case "design":
            skillIcon=Design;
            break;
        default:
            break;
    }
    return (
        <div className="p-2 col-12 col-md-6 col-lg-12">
            <div className="container">
                <div className="row text-start text-md-center text-lg-start">
                    <div className="col-3 col-md-12 col-lg-3">
                        <img src={skillIcon} alt="skill icon" className="img-responsive icon-large" />
                    </div>
                    <div className="col-9 col-md-12 col-lg-9">
                        <strong>{skillName}</strong>
                        <p>
                            {skills.map(skill => {
                                return (
                                    <span className="badge rounded-pill color-dark-disable me-1">{skill}</span>
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