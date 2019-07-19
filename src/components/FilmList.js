import React from 'react';
import Film from './Film';

export default function FilmList({films}) {
    return (
        <section className="filmlist">
            <div className="filmlist-center">
                {
                    films.map(item => {
                        return <Film key={item.id} film={item} />
                    })
                }
            </div>
        </section>
    )
}
