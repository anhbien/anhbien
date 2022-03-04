import React from "react";
import Thumbnail from "../images/Thumbnail.jpg";
import { Link } from "react-router-dom";

function Card(props) {
    const { id, title, description } = props
    return (
        <div className="card h-100" key={id}>
            <Link to={`/portfolio-details/${id}`}>
                <img src={Thumbnail} className="card-img" alt="Alt Text" />
                <div className="card-img-overlay">
                    <h5 className="card-title text-uppercase">{title}</h5>
                    <p className="card-text text-truncate-2-line text-light">{description}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;