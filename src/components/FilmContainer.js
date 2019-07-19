import React from 'react'
import FilmList from './FilmList';
import {withFilmConsumer} from '../context';
import Loading from './Loading';

function FilmContainer({context}) {
    const {loading,films} = context;
    if(loading){
        return <Loading/>;
    }
    return (
        <>
        <FilmList films={films} />
        </>
    );
}

export default withFilmConsumer(FilmContainer)

// export default function FilmContainer() {
//     return (
//         <FilmConsumer>
//         {
//             (value) => {
//                 const {loading,films} = value
//                 if(loading){
//                     return <Loading/>;
//                 }
//                 return (
//                     <div>
//                         Film Container
//                         <FilmList films={films} />
//                     </div>
//                 );
//             }
//         }
//         </FilmConsumer>
//     );
// }
