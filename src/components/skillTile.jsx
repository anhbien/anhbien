import React from "react";
import SkillIcon from "../images/skill-computer.png";

function SkillTile() {
    return (
        <div className="p-2 col-12 col-md-6 col-lg-12">
            <div className="container">
                <div className="row text-start text-md-center text-lg-start">
                    <div className="col-3 col-md-12 col-lg-3">
                        <img src={SkillIcon} width="50" alt-text="" />
                    </div>
                    <div className="col-9 col-md-12 col-lg-9">
                        <strong>Skill name</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillTile;