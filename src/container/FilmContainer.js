import { useState, useEffect } from "react"
import FilmList from "../component/FilmList";
import FilmSelect from "../component/FilmSelect";
import FilterItems from "../component/FilterItems";

const FilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [filteredFilms, setFilteredFilms] = useState([]);


    useEffect(() => {
        getFilms();
    }, [])

    const getFilms = function(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films))
    }

    const filter = (searchFilm) => {
        const lowerSearch = searchFilm.toLowerCase();
        const filteredFilms = films.filter((film) => {
          return film.title.toLowerCase().indexOf(lowerSearch) > -1;
        });
        setFilteredFilms(filteredFilms);
      }

    return(
        <div className="film-container">
        <FilterItems handleChange={filter}/>
        
        <FilmList films={films}/>
        
        </div>
    )
  
}

export default FilmContainer;
