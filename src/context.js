import React, { Component } from 'react';
import items from './data';

const FilmContext = React.createContext();

class FilmProvider extends Component {
    state={
        films:[],
        featuredFilms:[],
        loading: true
    };
 
    componentDidMount() {
        let films = this.formatData(items);
        let featuredFilms = films.filter(film => film.featured === true);
        this.setState({
            films,
            featuredFilms,
            loading: false
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let film = {...item.fields,images,id}

            return film;
        });
        return tempItems;
    }

    getFilm = (slug) => {
        let tempFilms = [...this.state.films];
        const film = tempFilms.find(film => film.slug===slug);
        return film;
    }

    render() {
        return (
           <FilmContext.Provider value={{...this.state,getFilm:this.getFilm}}>
               {this.props.children}
           </FilmContext.Provider>
        )
    }
}

const FilmConsumer = FilmContext.Consumer;

export function withFilmConsumer(Component){
    return function ConsumerWrapper(props){
        return (
            <FilmConsumer>
                {value => <Component {...props} context={value} />}
            </FilmConsumer>
        );
    }
}

export {FilmProvider,FilmConsumer,FilmContext};