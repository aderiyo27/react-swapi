import React from 'react';
import Hero from'../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
//import FeaturedFilm from '../components/FeaturedFilm';
import FilmContainer from '../components/FilmContainer';

export default function Film() {
        return (
        <>
        <Hero hero="filmHero">
            <Banner title="Movies List" subtitle="Click on the movie poster to see Movie description">
                <Link to="/" className="btn-primary">Return to Home Page</Link>
            </Banner>
        </Hero>
        <FilmContainer/>
        </>
        )
}
