import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Information from '../components/Information';
import {Link} from 'react-router-dom';
import FeaturedFilm from '../components/FeaturedFilm';

export default function Home() {
    return (
        <>
        <Hero>
            <Banner 
                title="Welcome"
                subtitle="This website contain information of Star Wars Movies">
                <Link to="/film" className="btn-primary">Browse Movies</Link>
            </Banner>
        </Hero>
        <Information/>
        </>
    )
}
