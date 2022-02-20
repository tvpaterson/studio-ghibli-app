import React from 'react';

const FilmItems = ({film, onFilmClick}) => {

  const handleClick = function(){
    onFilmClick(film);
  }


  return( 
    <div className='list-selector'>
    <li onClick={handleClick}>{film.title}</li>
    </div>
    )
}

export default FilmItems;