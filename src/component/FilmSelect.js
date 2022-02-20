import React from 'react';
import FilmList from './FilmList';

const FilmSelector = ({films, onFilmSelected}) => {

    const handleChange = function(event) {
        const chosenFilm = films[event.target.value];
        onFilmSelected(chosenFilm);
    }
    
    const filmOptions = films.map((film, index) => {
      return <option value={index} key={index}>{film.title}</option>
    })
    

    

    return (
        <select defaultValue="" onChange={handleChange}>
            

            <option value="" selected>Select film: </option>
            <option value="filmlist">All Films </option>
            
            {filmOptions}
            
            
        </select>
    )
}

export default FilmSelector;