import React, { Component } from 'react'
import {FilmContext} from '../context';
import Loading from './Loading';
import Film from './Film';
import Title from './Title';

export default class FeaturedFilm extends Component {
    static contextType = FilmContext;
    render() {
        let { loading, featuredFilms: films } = this.context;
        films = films.map(film => {
            return <Film key={film.id} film={film} />;
        })
        return (
            <section className="featured-film">
               <Title title="Featured Movies"/>
               <div className="featured-film-center">
                   {loading ? <Loading/> : films}
               </div>
            </section>
        )
    }
}
