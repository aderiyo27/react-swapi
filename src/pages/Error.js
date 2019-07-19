import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <Hero hero="filmErrorHero">
            <Banner title="404" subtitle="Page Not Found">
                <Link to="/" className="btn-primary">Return to Home Page</Link>
            </Banner>
        </Hero>
    )
}
