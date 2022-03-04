import React from "react";
import Pin from "../images/pin.png"

function Timeline() {
    return (
        <section>
            <div className="content">
                <h3>Company Name</h3>
                <p>
                    <img src={Pin} width="16" alt="location pin" />
                    <strong className="ps-2">Location</strong>
                </p>
                <p><em>November 2020 - present</em></p>
                <ul>
                    <li>
                        Culpa qui officia deserunt mollit anim id esto polujimi laborum. Sed ut
                        perspiciatis unde omnis iste eropluk onatuspop error sit voluptartem
                        accusantium
                    </li>
                    <li>
                        Culpa qui officia deserunt mollit anim id esto polujimi laborum. Sed ut
                        perspiciatis unde omnis iste eropluk onatuspop error sit voluptartem
                        accusantium
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Timeline;