import React from "react";
import Thumbnail from "../images/Thumbnail.jpg";
import { Link } from "react-router-dom";

function Card() {
    return (
        <div className="card h-100">
            <Link to="/portfolio-details">
                <img src={Thumbnail} className="card-img" alt="Alt Text" />
                <div className="card-img-overlay">
                    <h5 className="card-title">PROJECT NAME</h5>
                    <p className="card-text text-truncate-2-line text-light">This is a wider card with supporting text below as a
                        natural lead-in to additional content.</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;