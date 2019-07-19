import React, { Component } from 'react'
import Title from './Title';
import {FaFilm,FaChild,FaGlobe,FaSpaceShuttle} from 'react-icons/fa';

export default class information extends Component {
    state={
        informations:[
            {
                icon:<FaFilm/>,
                title:"Movies",
                info:"List of Star Wars Movie episode 1 - 7"
            },
            {
                icon:<FaChild/>,
                title:"Characters",
                info:"List of Star Wars Characters"
            },
            {
                icon:<FaGlobe/>,
                title:"Planets",
                info:"List of Star Wars Planets"
            },
            {
                icon:<FaSpaceShuttle/>,
                title:"Starships",
                info:"List of Star Wars Starships"
            }
        ]
    };
    render() {
        return (
            <section className="informations">
                <Title title="information"/>

                <div className="informations-center">
                    {this.state.informations.map((item,index) => {
                        return <article key={index} className="information">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>

            </section>
        )
    }
}
