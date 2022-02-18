import { useState, useEffect } from "react"

const FilmItems = ({film}) => {
    return(
        <div>
        <p>{film.title}</p>
        {/* <img src="{film.movie-banner}"/> */}
        </div>
    )
  
}

export default FilmItems;
