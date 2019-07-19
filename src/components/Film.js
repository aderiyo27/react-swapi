import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Film({film}) {
    const{name,slug,images,year,subtitle} = film;

    return (
        <article className="film">
            <div className="img-container">
                <img src={images[0]} alt="Single Room"/>
                <div className="year-top">
                    <h6>{year}</h6>
                    <p>{subtitle}</p>
                </div>
                <Link to={`/film/${slug}`} className="btn-primary film-link">Detail</Link>
            </div> 
            <p className="film-info">{name}</p>
        </article>
    )
}

Film.propTypes = {
    film:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        year:PropTypes.number.isRequired,
    })
}