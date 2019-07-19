import React, { Component } from 'react';
import defaultBcg from '../images/StarWarsHero.jpg';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {FilmContext} from '../context';
import StyledHero from '../components/StyledHero';
import { tsExportAssignment } from '@babel/types';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = FilmContext;

    render() {
        const {getFilm} = this.context;
        const film = getFilm(this.state.slug);
        if(!film) {
            return (
            <div className="error">
                <h3>No such movie could be found</h3>
                <Link to='/film' className="btn-primary">Back to Movies Page</Link>
            </div>
            )
        }
        const {
            id,
            name,
            subtitle,
            description,
            director,
            release,
            producer,
            characters,
            planets,
            starships,
            images
            } = film
        const [mainImg,...defaultImg] = images;


        return (
            <>
            <StyledHero img={images[0] || this.state.defaultBcg}>
                <Banner title={`${subtitle}`}>
                    <Link to='/film' className="btn-primary">Back to Movies Page</Link>
                </Banner>
            </StyledHero>
            <section className="single-film">
                <div className="single-film-images">
                    {defaultImg.map((item,index)=>{
                        return <img key={index} src={item} alt={name}/>
                    })}
                </div>

                <div className="single-film-info">
                    <article className="desc">
                        <h3>opening crawl</h3>
                        <p>{description}</p>
                    </article>

                    <article className="info">
                        <h3>Information</h3>
                        <h6>Episode : {id}</h6>
                        <h6>Title : {subtitle}</h6>
                        <h6>Release Date : {release}</h6>
                        <h6>Director : {director}</h6>
                        <h6>Producer : {producer}</h6>
                        <h6></h6>
                    </article>
                </div>
            </section>

            <section className="film-extras">
                <h3>Characters</h3>
                <ul className="extras">
                    {characters.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </section>

            <section className="film-extras">
                <h3>Planets</h3>
                <ul className="extras">
                        {planets.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                </ul>
            </section>

            <section className="film-extras">
                <h3>Starships</h3>
                <ul className="extras">
                    {starships.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </section>
            </>
        )
    }
}
